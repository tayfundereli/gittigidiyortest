const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'test/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      windowSize: "maximize",
      desiredCapabilities: {
        chromeOptions: {
          args: ["--disable-notifications"]
        }
      },
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/Home.js',
    searchPage: './pages/Search.js',
    sepetPage: './pages/sepet.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'gittigidiyorcom',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}