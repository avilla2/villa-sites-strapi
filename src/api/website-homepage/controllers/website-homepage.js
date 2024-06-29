'use strict';

/**
 * website-homepage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::website-homepage.website-homepage', ({ strapi }) => ({
    async findOne(ctx) {
        // your custom logic for modifying the input
        // ctx.query = { ...ctx.query, locale: "en" }; // force ctx.query.locale to 'en' regardless of what was requested
  
        // Call the default parent controller action
        // @ts-ignore
        const result = await super.findOne(ctx);
  
        // your custom logic for modifying the output
        // result.meta.date = Date.now(); // change the date that is returned
        console.log('ahdshfa')
        return result;
      },
}));
