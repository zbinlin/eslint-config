const jsConfig = require('./javascript');

const {
    files: _,
    ...defaultConfig
} = jsConfig;

module.exports = {
    env: {
        es6: true,
        node: true,
    },
    ...defaultConfig,
};
