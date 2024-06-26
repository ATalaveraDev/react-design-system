
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest",
      ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform",
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
  },
}