const {
    toTestExts,

    JS_EXTENSIONS,
    CJS_EXTENSIONS,
    MJS_EXTENSIONS,
    TS_EXTENSIONS,
    JSX_EXTENSIONS,
    CJSX_EXTENSIONS,
    MJSX_EXTENSIONS,
    TSX_EXTENSIONS,
} = require("./helper");

const javascript = [].concat(
    JS_EXTENSIONS, CJS_EXTENSIONS, MJS_EXTENSIONS,
);
const react = [].concat(
    JSX_EXTENSIONS, CJSX_EXTENSIONS, MJSX_EXTENSIONS, TSX_EXTENSIONS,
);
const typescript = [].concat(
    TS_EXTENSIONS, TSX_EXTENSIONS,
);
const all = [].concat(
    JS_EXTENSIONS, CJS_EXTENSIONS, MJS_EXTENSIONS, TS_EXTENSIONS,
    JSX_EXTENSIONS, CJSX_EXTENSIONS, MJSX_EXTENSIONS, TSX_EXTENSIONS,
);
const test = toTestExts(
    [].concat(
        JS_EXTENSIONS, CJS_EXTENSIONS, MJS_EXTENSIONS, TS_EXTENSIONS,
        JSX_EXTENSIONS, CJSX_EXTENSIONS, MJSX_EXTENSIONS, TSX_EXTENSIONS,
    ),
);

module.exports = {
    javascript,
    react,
    typescript,
    all,
    test,
};
