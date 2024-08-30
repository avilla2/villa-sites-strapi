'use strict';

/**
 * admin-config router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::admin-config.admin-config');
