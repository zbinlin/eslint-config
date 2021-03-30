const { exts2glob } = require("./lib/helper");
const {
    typescript: tsExtensions,
    typescriptReact: tsReactExtensions,
} = require("./lib/ext");
const config = require("./config/typescript");

module.exports = {
    overrides: [
        {
            files: exts2glob([
                ...tsExtensions,
                ...tsReactExtensions,
            ]),
            ...config,
        },
    ],
};
