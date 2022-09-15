module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-transform-modules-commonjs",
    ["@babel/plugin-transform-react-jsx", { pragma: "h" }],
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true,
      },
    ],
  ],
};
