const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 15000,

  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});