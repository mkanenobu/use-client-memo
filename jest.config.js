module.exports = {
  testEnvironment: "jsdom",
  testRegex: "/__tests__/.*\\.test\\.ts?$",
  // modulePathIgnorePatterns: ["<rootDir>/examples/"],
  // setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
  moduleNameMapper: {
    "^use-client-memo$": "<rootDir>/src",
  },
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/", "/__tests__/"],
};
