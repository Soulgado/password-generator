module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": [2, "double", {"avoidEscape": true}],
        "no-unused-vars": "on",
    },
    "ignores": [
        "node_modules/**/*",
        "public/**/*",
        "eslint.config.js",
        "build/**/*",
        "dist/**/*",
        "webpack/*.js",
        "package*.json",
        "**/*.d.ts"
    ]
}
