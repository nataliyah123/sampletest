'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { id } = ctx.params;
    console.log("I am a controller", ctx.params)	
    const entity = await strapi.services.customers.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.customers });
  },
};

