module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        
        "plugin:react/recommended",
        "plugin:@next/next/recommended",
      
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/no-unknown-property": [
            2,
            {
              "ignore": [
                "jsx"
              ]
            }
          ]
    }
}
