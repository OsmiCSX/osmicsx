// jest.config.js
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@?react-navigation|@react-native/polyfills)"
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },  
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  testEnvironment: 'node',
  testEnvironmentOptions: {},
};
