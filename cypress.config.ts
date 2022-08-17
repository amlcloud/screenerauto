import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'w6b9w5', // <- add this line
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'aml screener test automation report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    baseUrl: 'https://screen.amlcloud.io',
    defaultCommandTimeout:30000,
    numTestsKeptInMemory:100,
    chromeWebSecurity: false,
    includeShadowDom:true,
    pageLoadTimeout:60000,
    video:false,
    trashAssetsBeforeRuns:true
  }
});
