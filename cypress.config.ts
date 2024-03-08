import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200/',
    viewportWidth: 1600,
    viewportHeight: 1600,
    video: false,
    screenshotOnRunFailure: false,
    animationDistanceThreshold: 50
  },
});
