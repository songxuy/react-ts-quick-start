module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.tsx', '.ts', '.js', '.json'],
        },
        typescript: {},
      },
    },
    "plugins": [
        "react",
        "unicorn",
        "promise",
        "@typescript-eslint"
    ],
    "rules": {
      "linebreak-style": [0 ,"error", "windows"],
      'import/no-extraneous-dependencies': ["error", { devDependencies: true }]
    }
};
