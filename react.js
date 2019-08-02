const {
    exts2glob,
    JSX_EXTENSIONS,
    CJSX_EXTENSIONS,
    MJSX_EXTENSIONS,
    TSX_EXTENSIONS,
} = require("./helper");

const extensions = [].concat(
    JSX_EXTENSIONS, CJSX_EXTENSIONS, MJSX_EXTENSIONS, TSX_EXTENSIONS,
);
module.exports = {
    files: exts2glob(extensions),
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
        },
    ),
    extends: [
        "plugin:import/react",
        "plugin:react/recommended",
    ],
};
