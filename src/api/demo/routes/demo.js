"use strict";

/**
 * demo router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::demo.demo", {
  config: {
    find: {
      middlewares: ["global::is-owner"],
    },
  },
});
