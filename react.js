const { exts2glob } = require("./lib/helper");
const {
    react: extensions,
} = require("./lib/ext");
const config = require("./config/react");

module.exports = {
    overrides: [
        {
            files: exts2glob(extensions),
            ...config,
        },
    ],
};
