export { };

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/coverage",
    "package.json",
    "package-lock.json",
    "setupTests.ts",
    "src/index.tsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  modulePaths: ["<rootDir>/src"],
};
