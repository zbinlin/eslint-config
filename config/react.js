const {
    react: extensions,
} = require("../lib/ext");

module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        "import/extensions": extensions,
        react: {
            version: "detect",
        },
    },
    plugins: [
        "react",
        "react-hooks",
    ],
    rules: Object.assign(
        {},
        {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            // @see: https://github.com/yannickcr/eslint-plugin-react/issues/2353
            "react/prop-types": [
                "off",
            ],
        },
    ),
    extends: [
        "plugin:import/react",
        "plugin:react/recommended",
    ],
};
