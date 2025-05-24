'use strict';

const getMapping = async () => {
  const mapping = await strapi.entityService.findOne('api::admin-config.admin-config', 1, {
    fields: ['id'],
    populate: { role_map: {fields: ['id'], populate: {role: {fields: ['id', 'name']}, website: {fields: ['id', 'name'], populate: {localizations: {fields: ['id', 'name']}}}}} },
  })
  const simplifiedMapping = {}
  // @ts-ignore
  if (mapping) {
    // @ts-ignore
    mapping.role_map.forEach((map) => {
      const locIds = map.website.localizations.map((loc) => loc.id)
      simplifiedMapping[map.role.id] = [map.website.id, ...locIds]
    })
  }
  return simplifiedMapping
}

const getMappedRoles = (roles, simplifiedMapping) => {
  const mappedRoles = roles.flatMap((r) => {
    if (r.id in simplifiedMapping) {
      return simplifiedMapping[r.id]
    } else {
      return []
    }
  })
  return mappedRoles
}

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register() {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {  
    const conditions = [
      {
        displayName: 'content belongs to role (Website)',
        name: 'website-based-access',
        async handler(user) {
          const simplifiedMapping = await getMapping();
          const mappedRoles = getMappedRoles(user.roles, simplifiedMapping)
          return { "id": { $in: mappedRoles } };
        },
      },
      {
        displayName: 'content belongs to role (Site Content)',
        name: 'website-based-access-content',
        async handler(user) {
          const simplifiedMapping = await getMapping();
          const mappedRoles = getMappedRoles(user.roles, simplifiedMapping)
          return { "website.id": { $in: [...mappedRoles, null] } };
        },
      },
    ]
    await strapi.admin.services.permission.conditionProvider.registerMany(conditions);
  },
};
