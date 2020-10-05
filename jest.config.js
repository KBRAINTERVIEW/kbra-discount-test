module.exports = {
  collectCoverageFrom: ["**/*.ts", "!server.js"],
  testPathIgnorePatterns: ["/__tests__/mocks/"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx|html)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  modulePaths: ["<rootDir>/src/"]
};
