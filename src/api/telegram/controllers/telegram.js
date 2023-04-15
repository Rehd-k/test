'use strict';

/**
 * telegram controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::telegram.telegram');
