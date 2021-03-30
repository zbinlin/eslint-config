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
const javascriptReact = [].concat(
    JSX_EXTENSIONS, CJSX_EXTENSIONS, MJSX_EXTENSIONS,
);
const typescript = [].concat(
    TS_EXTENSIONS,
);
const typescriptReact = [].concat(
    TSX_EXTENSIONS,
);
const react = [].concat(
    javascriptReact, typescriptReact,
);
const all = [].concat(
    javascript,
    typescript,
    react,
);
const jsTest = toTestExts(
    [].concat(javascript),
);
const reactTest = toTestExts(
    [].concat(react),
);
const tsTest = toTestExts(
    [].concat(typescript),
);
const test = toTestExts(
    [].concat(
        jsTest,
        tsTest,
        react,
    ),
);

module.exports = {
    javascript,
    javascriptReact,
    react,
    typescript,
    typescriptReact,
    all,
    jsTest,
    reactTest,
    tsTest,
    test,
};
