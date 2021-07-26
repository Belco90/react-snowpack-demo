const snowpackJestConfig =
  require('@snowpack/app-scripts-react/jest.config.js')()

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...snowpackJestConfig,
  //testEnvironment: 'jsdom', <-- enable this when upgrading to jest v27
  clearMocks: true,
}
