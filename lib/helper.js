function exts2glob(exts) {
    if (!Array.isArray(exts)) {
        exts = [exts];
    }
    const result = [];
    for (const ext of exts) {
        result.push(`*${ext}`);
    }
    return result;
}

const toReactExts = exts => exts.map(ext => `${ext}x`);
const toTestExts = (exts, testExt = "test") => exts.map(ext => `.${testExt}${ext}`);

const JS_EXTENSIONS = [".js"];
const CJS_EXTENSIONS = [".cjs"];
const MJS_EXTENSIONS = [".mjs"];
const TS_EXTENSIONS = [".ts"];
const JSX_EXTENSIONS = toReactExts(JS_EXTENSIONS);
const CJSX_EXTENSIONS = toReactExts(CJS_EXTENSIONS);
const MJSX_EXTENSIONS = toReactExts(MJS_EXTENSIONS);
const TSX_EXTENSIONS = toReactExts(TS_EXTENSIONS);

module.exports = {
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
};
