const getService = (name) => {
  return strapi.plugin("content-manager").service(name);
};

module.exports = {
    async beforeFindOne(event) {
      if (strapi.config.isApiCall) {
        const ctx = strapi.requestContext.get();
        const { roles } = ctx?.state?.user
        const rolesList = roles.map((role) => role.code)
        const { model } = event
        //console.log(event)
        //const modelSchema = strapi.getModel(uid);
        const configManager = await getService('content-types');
        const conf = await configManager.findConfiguration(model)
        //console.log(model);
        const { editable } = conf.metadatas.admin_roles.edit
        if (rolesList.includes('strapi-super-admin')) {
          if (editable === false) {
            conf.metadatas.admin_roles.edit.editable = true
            const update = await configManager.updateConfiguration(model, conf);
            console.log('updatee', update.metadatas.admin_roles)
            return update;
          }
        } else {
          if (editable === true) {
            conf.metadatas.admin_roles.edit.editable = false
            const update = await configManager.updateConfiguration(model, conf);
            console.log('updatee', update.metadatas.admin_roles)
            return update;
          }
        }
      };
    },
  };