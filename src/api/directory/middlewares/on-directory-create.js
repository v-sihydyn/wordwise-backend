"use strict";

/**
 * `on-directory-create` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const user = ctx.state.user;

    if (!user) return ctx.unauthorized("You are not authenticated");

    await next();

    const uid = 'plugin::users-permissions.user'
    const payload = {
      data: {
        directories: {
          connect: [ctx.response.body.data.id]
        }
      }
    }

    try {
      await strapi.entityService.update(uid, user.id, payload)
    } catch (error) {
      ctx.badRequest('Error updating user')
    }
  };
};
