const {
    exts2glob,
    JS_EXTENSIONS,
    CJS_EXTENSIONS,
    MJS_EXTENSIONS,
} = require('./helper');

const extensions = [].concat(
    JS_EXTENSIONS, CJS_EXTENSIONS, MJS_EXTENSIONS,
);
module.exports = {
    files: exts2glob(extensions),
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
        },
    },
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        semi: [
            'error',
            'always',
        ],
        'no-unused-vars': [
            'error',
            {
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],
        'no-console': [
            'off',
        ],
        'comma-dangle': [
            'warn',
            'always-multiline',
        ],
        'no-trailing-spaces': [
            'error',
        ],
        'import/no-unresolved': [
            'warn',
            {
                commonjs: true,
            },
        ],
    },
    plugins: [
    ],
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
};
