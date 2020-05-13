const { rules } = require("./common");

module.exports = {
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
        ecmaFeatures: {
        },
    },
    rules: {
        ...rules,
    },
    plugins: [
    ],
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
};
