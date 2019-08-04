# eslint-config
eslint configuration


## Usage

Default configuration include typescript, javascript and react

```javascript
module.exports = {
    extends: "@zbinlin",
};
```

equivalent to:

```javascript
module.exports = {
    extends: [
        "@zbinlin/eslint-config/javascript",
        "@zbinlin/eslint-config/react",
        "@zbinlin/eslint-config/typescript",
    ],
}
```
