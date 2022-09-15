// const base = require("../../babel.config.js");

module.exports = {
  // ...base,
  presets: ["@babel/preset-react"],
  env: {
    test: {},
  },
  plugins: [
    "@babel/plugin-syntax-jsx",
    "@babel/plugin-transform-modules-commonjs",
  ],
};
