'use strict';

/**
 * `called-by` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    // console.log(ctx)
    const isApiCall = ctx.originalUrl.startsWith('/content-manager/collection-types/');
    strapi.config.isApiCall = isApiCall;

    await next();
  };
};
