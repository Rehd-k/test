'use strict';

/**
 * telegram service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::telegram.telegram');
