module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.ts"
  ]
};
