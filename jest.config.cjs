module.exports = {
  preset: 'react-native',
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
