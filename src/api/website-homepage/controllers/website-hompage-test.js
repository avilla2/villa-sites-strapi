'use strict';

/**
 * website-homepage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::website-homepage.website-homepage', ({ strapi }) => ({
    async update(ctx) {
      const { id } = ctx.params;
      const { role } = ctx.state.user;
      console.log(id, role);
      // if you don't want to hard code the ids, you can do a findOne for the id and do a check on the resto name. 
      // Assuming id 4 corresponds to entry "The optimist"
      // Assuming id 5 corresponds to entry "The Negative"
      if ((id === 4 && role.name !== "Role Maria") || (id === 5 && role.name !== "Role Julia")) {
        // @ts-ignore
        return ctx.badRequest("You are not allowed to update this entry", {
          id: id,
          role: role.name,
        });
      } 
    
      const entity = await strapi
        .service("api::website-homepage.website-homepage")
        .update(id, { data: ctx.request.body });
  
      // @ts-ignore
      const response = await super.findOne(ctx);
      // const sanitizedEntity = await this.sanitizeOutput(response, ctx);
      // return this.transformResponse(sanitizedEntity);
      return response;
    },
  }));
