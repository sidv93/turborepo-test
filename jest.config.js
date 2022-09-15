const path = require("path");

const fromRoot = (d) => path.join(__dirname, d);

module.exports = {
  roots: [fromRoot("apps/admin"), fromRoot("apps/products")],
  resetMocks: true,
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,ts,tsx}"],
  coverageThreshold: null,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    "@src/(.*)": fromRoot("apps/admin/src/$1"),
    "@src/(.*)": fromRoot("apps/products/src/$1"),
  },
};
