const {
    exts2glob,

    JS_EXTENSIONS,
    CJS_EXTENSIONS,
    MJS_EXTENSIONS,
    TS_EXTENSIONS,
    JSX_EXTENSIONS,
    CJSX_EXTENSIONS,
    MJSX_EXTENSIONS,
    TSX_EXTENSIONS,
} = require('./helper');

const extensions = [].concat(
    JS_EXTENSIONS, CJS_EXTENSIONS, MJS_EXTENSIONS, TS_EXTENSIONS,
    JSX_EXTENSIONS, CJSX_EXTENSIONS, MJSX_EXTENSIONS, TSX_EXTENSIONS,
);
module.exports = {
    files: exts2glob(extensions),
    parser: '@typescript-eslint/parser',
    parserOptions: {
    },
    settings: {
        'import/extensions': extensions,
        'import/parsers': {
            '@typescript-eslint/parser': [...TS_EXTENSIONS, ...TSX_EXTENSIONS],
        },
        'import/resolver': {
            typescript: {
            },
            node: {
                extensions,
            },
        },
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: Object.assign(
        {},
        {
            /**
             * @link https://github.com/benmosher/eslint-plugin-import/issues/920
             */
            'import/named': 'off',

            'react/display-name': 'off',

            '@typescript-eslint/no-object-literal-type-assertion': [
                'error',
                {
                    allowAsParameter: true,
                },
            ],
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/array-type': ['error', 'array-simple'],

            /**
             * @link https://github.com/typescript-eslint/typescript-eslint/issues/342
             */
            'no-undef': 'off',
        },
    ),
    extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
    ],
};
