const { exts2glob } = require("./lib/helper");
const {
    javascript: extensions,
} = require("./lib/ext");
const config = require("./config/javascript");

module.exports = {
    overrides: [
        {
            files: exts2glob(extensions),
            ...config,
        },
    ],
};
