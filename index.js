const jsOpt = require('./javascript');
const tsOpt = require('./typescript');
const reactOpt = require('./react');
const {
    exts2glob,
    toTestExts,

    JS_EXTENSIONS,
    CJS_EXTENSIONS,
    MJS_EXTENSIONS,
    TS_EXTENSIONS,
    JSX_EXTENSIONS,
    CJSX_EXTENSIONS,
    MJSX_EXTENSIONS,
    TSX_EXTENSIONS,
} = require('./helper');

const testExtsPattern = exts2glob(toTestExts(
    [].concat(
        JS_EXTENSIONS, CJS_EXTENSIONS, MJS_EXTENSIONS, TS_EXTENSIONS,
        JSX_EXTENSIONS, CJSX_EXTENSIONS, MJSX_EXTENSIONS, TSX_EXTENSIONS,
    ),
));

const {
    files: _,
    ...defaultOpt
} = jsOpt;

module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    ...defaultOpt,
    overrides: [
        {
            files: testExtsPattern,
            env: {
                mocha: true,
                jest: true,
            },
        },
        {
            ...reactOpt,
        },
        {
            ...tsOpt,
        },
    ],
};
