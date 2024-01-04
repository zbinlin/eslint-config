const {
    exts2glob,
} = require("./lib/helper");
const {
    test: testExtensions,
} = require("./lib/ext");

module.exports = {
    env: {
        es2021: true,
        node: true,
        browser: true,
    },
    overrides: [
        {
            files: exts2glob(testExtensions),
            env: {
                mocha: true,
                jest: true,
            },
        },
    ],
    extends: [
        "./javascript",
        "./react",
        "./typescript",
    ],
};
