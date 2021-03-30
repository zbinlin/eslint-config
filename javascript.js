const { exts2glob } = require("./lib/helper");
const {
    javascript: jsExtensions,
    javascriptReact: jsReactExtensions,
} = require("./lib/ext");
const config = require("./config/javascript");

module.exports = {
    overrides: [
        {
            files: exts2glob([
                ...jsExtensions,
                ...jsReactExtensions,
            ]),
            ...config,
        },
    ],
};
