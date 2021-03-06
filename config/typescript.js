const {
    all: extensions,
    typescript: tsExtensions,
    typescriptReact: tsReactExtensions,
} = require("../lib/ext");
const { rules } = require("./common");

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
    },
    settings: {
        "import/extensions": extensions,
        "import/parsers": {
            "@typescript-eslint/parser": [
                ...tsExtensions,
                ...tsReactExtensions,
            ],
        },
        "import/resolver": {
            typescript: {
            },
            node: {
                extensions,
            },
        },
    },
    plugins: [
        "@typescript-eslint",
    ],
    rules: {
        ...rules,

        "indent": "off",
        "@typescript-eslint/indent": rules.indent,

        /**
         * @link https://github.com/benmosher/eslint-plugin-import/issues/920
         */
        "import/named": "off",

        "react/display-name": "off",

        "@typescript-eslint/consistent-type-assertions": [
            "error",
            {
                assertionStyle: "as",
                objectLiteralTypeAssertions: "allow-as-parameter",
            },
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
            },
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "array-simple",
                readonly: "array-simple",
            },
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            },
        ],
        "@typescript-eslint/no-inferrable-types": "off",

        /**
         * @link https://github.com/typescript-eslint/typescript-eslint/issues/342
         */
        "no-undef": "off",
    },
    extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
    ],
};
