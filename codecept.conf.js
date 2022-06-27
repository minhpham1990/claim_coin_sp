const os = require("os");

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://shopee.vn',
      show: false,
      browser: 'chromium',
      waitForNavigation: "networkidle0",
      restart: 'browser',
      chromium:{
        channel:'chrome',
        userDataDir: os.homedir+'/tmp'
      },
      restart: "context",
      waitForAction:1000,
      keepCookies:true,
      // keepBrowserState:true,
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
    homePage: './pages/homePage.js',
    luckyNumberPage: './pages/luckyNumberPage.js',
    coinPage: './pages/coinPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'shopee-daily'
}