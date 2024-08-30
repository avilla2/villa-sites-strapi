'use strict';

/**
 * admin-config controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::admin-config.admin-config');
