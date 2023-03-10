module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      "^.+\\.css$": "jest-transform-css"
    },
    "testEnvironment": "jsdom"
  };