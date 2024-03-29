'use strict';

/**
 * website-homepage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-homepage.website-homepage');
