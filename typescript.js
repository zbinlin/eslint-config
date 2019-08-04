const { exts2glob } = require("./lib/helper");
const {
    all: extensions,
} = require("./lib/ext");
const config = require("./config/typescript");

module.exports = {
    overrides: [
        {
            files: exts2glob(extensions),
            ...config,
        },
    ],
};
