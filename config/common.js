exports.rules = {
    indent: [
        "error",
        4,
        {
            SwitchCase: 1,
        },
    ],
    quotes: [
        "error",
        "double",
        {
            avoidEscape: true,
            allowTemplateLiterals: true,
        },
    ],
    "linebreak-style": [
        "error",
        "unix",
    ],
    semi: [
        "error",
        "always",
    ],
    "no-unused-vars": [
        "error",
        {
            args: "none",
            ignoreRestSiblings: true,
        },
    ],
    "no-console": [
        "off",
    ],
    "comma-dangle": [
        "warn",
        "always-multiline",
    ],
    "no-trailing-spaces": [
        "error",
    ],
    "import/no-unresolved": [
        "warn",
        {
            commonjs: true,
        },
    ],
};
