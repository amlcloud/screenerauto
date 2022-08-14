import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'w6b9w5', // <- add this line
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
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
