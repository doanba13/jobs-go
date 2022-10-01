module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['standard'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        semi: 0,
        indent: 0,
        'comma-dangle': 0,
        'no-unused-vars': 0,
        camelcase: 0,
        'multiline-ternary': 0,
    },
};
