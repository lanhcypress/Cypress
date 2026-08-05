const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      config.pageLoadTimeout = 120000; // Tăng thời gian chờ tải trang lên 2 phút (120s)
      config.defaultCommandTimeout = 10000; // Tăng thời gian chờ tìm Element lên 10 giây // implement node event listeners here
    },
  },
});
