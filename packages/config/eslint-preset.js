module.exports = {
  extends: ["react-app", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "react/jsx-key": "off",
  },
};
