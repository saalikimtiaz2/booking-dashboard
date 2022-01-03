module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "extends": ["plugin:react/recommended", "airbnb", "prettier"],
  "plugins": ["react", "prettier"],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "no-undef": "warn",
    "no-console": "off",
    "no-shadow": "off",
    "react/button-has-type": "off",
    "import/no-unresolved": "warn",
    "no-else-return":"off",
    "no-underscore-dangle":"off",
    "jsx-a11y/click-events-have-key-events":"off",
    "jsx-a11y/no-noninteractive-element-interactions":"off",
    "jsx-a11y/no-static-element-interactions":"off"

  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}
