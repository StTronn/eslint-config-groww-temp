module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:import/errors"], // some options that could be adopted plugin:react/recommended, airbnb,google
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "globals": {
    "__BROWSER__": false,
    "__PWA_ENV__": false,
    "__LOCAL__": false
  },
  "parserOptions": {
    "ecmaVersion": 10,
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./webpack.config.js"
      }
    }
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
      //------react/jsx rules-------

      //prevents eslint from throwing React/Component not used error
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

      //no more than 2 line of empty spaces in jsx and other indentation fixable by eslint
    "react/jsx-indent": [
      "warn",
      2,
      { "checkAttributes": true, "indentLogicalExpressions": true }
    ],

      //warning on not use of key
    "react/jsx-key": 1,

      //-----js rules------

      //fix with typescript eslint
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error",
      { "functions": false,
          //to be enabled for classed and variables
        "classes": false,
        "variables": false
      }
    ],


    "no-unreachable": "warn",

    "no-unreachable-loop": "warn",

    "no-unused-expressions": [
      "warn",
      {
        "allowShortCircuit": true,
        "allowTernary": true,
        "allowTaggedTemplates": true
      }
    ],

    "no-unused-vars": [
      "warn",
      {
        "args": "none",
        "caughtErrors": "none",
        "ignoreRestSiblings": true,
        "vars": "all"
      }
    ],


      //prevent use of var use let/const
    "no-var": "warn",

      //"array-bracket-spacing": ["warn", "never"], future discuss

      //spacing in arrow function formating
    "arrow-spacing": ["warn", { "before": true, "after": true }],

      //space after {} in blocks
    "block-spacing": ["warn", "always"],

      //brace style discuss formating
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],

      //use of camelCasing future1
      // "camelcase": [
      //   "error",
      //   {
      //     "allow": ["^UNSAFE_"],
      //     "properties": "never",
      //     "ignoreGlobals": true
      //   }
      // ],

      //comma dangle multiline must end with comma in array and objects helps in copy/paste and diff
    "comma-dangle": [
      "warn",
      {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }
    ],

      // a, b not a,b or a ,b formating
    "comma-spacing": ["warn", { "before": false, "after": true }],

      // comma at the last of line in multi line formating
    "comma-style": ["warn", "last"],


      // dot before property a \n .property()
    "dot-location": ["warn", "property"],


      // no new lines at end of file formating
    "eol-last": "error",

      //use === instead of ==
    "eqeqeq": ["warn", "always", { "null": "ignore" }],

      //no foo () always foo()
    "func-call-spacing": ["warn", "never"],

      //maxiumum 2 spaces indentation
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "MemberExpression": 1,
        "FunctionDeclaration": { "parameters": 1, "body": 1 },
        "FunctionExpression": { "parameters": 1, "body": 1 },
        "CallExpression": { "arguments": 1 },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "ignoreComments": true,
        "ignoredNodes": [
          "TemplateLiteral *",
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ],
        "offsetTernaryExpressions": true
      }
    ],

      //key spacing a: b no a:b or a :b formating
    "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],

      //space after keywords
    "keyword-spacing": ["warn", { "before": true, "after": true }],

      // space betwwen to class members unless singline
    "lines-between-class-members": [
      "warn",
      "always",
      { "exceptAfterSingleLine": true }
    ],

      //warn at the use of console
    "no-console": "warn",

      //the ability to "fall through" from one case to the next.
    "no-fallthrough": "warn",

    "no-func-assign": "error",

      //variable like window cannot be modified
    "no-global-assign": "error",

      // imported values can't be reassigned
    "no-import-assign": "error",

      // This rule is aimed at catching invalid whitespace that is not a normal tab and space
    "no-irregular-whitespace": "error",

    "no-mixed-operators": [
      "warn",
      {
        "groups": [
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        "allowSamePrecedence": true
      }
    ],

      // no tab or spaces
    "no-mixed-spaces-and-tabs": "error",

      //
    "no-multi-spaces": "warn",

      //"no-multi-str": "error",

    "no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 0 }],

      //foo = foo
    "no-self-assign": ["error", { "props": true }],

      // foo === foo
    "no-self-compare": "error",

      //please see eslint docs will be added in future
    "no-sequences": "error",

      // var undefined = "foo" not allowed
    "no-shadow-restricted-names": "error",

      // no [,,]
      //"no-sparse-arrays": "error", future

      //no \t in code
    "no-tabs": "error",

      // warn if using ${} inside ""
    "no-template-curly-in-string": "warn",

      //formating
    "no-trailing-spaces": "warn",

      //try to avoid
    "no-undef": "warn",

      //"no-undef-init": "error", future

      // see eslint
    "no-unexpected-multiline": "warn",

      // no modification in loop
    "no-unmodified-loop-condition": "warn",

    "valid-typeof": ["warn", { "requireStringLiterals": true }]

      // "computed-property-spacing": [
      //   "error",
      //   "never",
      //   { "enforceForClassMembers": true }
      // ],
      //"constructor-super": "error",

      // braces for multiline if and while formating future1
      //"curly": ["error", "multi-line"],

      //"default-case-last": "error",

      //"multiline-ternary": ["error", "always-multiline"],
      //"new-parens": "error",
      //"no-array-constructor": "error",

      //"no-async-promise-executor": "error",
      //"no-caller": "error",
      //"no-case-declarations": "error",

      //hazardous errors
      // "no-class-assign": "error",
      // "no-compare-neg-zero": "error",
      // "no-cond-assign": "error",
      // "no-const-assign": "error",

    //"no-constant-condition": ["warn", { "checkLoops": false }],

      //"no-control-regex": "error",
      //"no-debugger": "error",
      //"no-delete-var": "error",
      //"no-dupe-args": "error",
      //"no-dupe-class-members": "error",
      //"no-dupe-keys": "error",
      //"no-duplicate-case": "error",
      //"no-useless-backreference": "error",
      //"no-empty": ["error", { "allowEmptyCatch": true }],
      //"no-empty-character-class": "error",
      //"no-empty-pattern": "error",
      //"no-eval": "error",
      //"no-ex-assign": "error",
      //"no-extend-native": "error",
      //"no-extra-bind": "error",
      //"no-extra-boolean-cast": "error",
      //"no-extra-parens": ["error", "functions"],


      //"no-floating-decimal": "error",
      //no reassigning function
      //"no-implied-eval": "error",
      //"no-invalid-regexp": "error",


      //disawllow __iterator__ not being used anywhere in code
      //"no-iterator": "error",

      //"no-labels": ["error", { "allowLoop": false, "allowSwitch": false }], future
      //"no-lone-blocks": "error", future
      //"no-loss-of-precision": "error", future

      // has to with regxp search eslint for more details future
      //"no-misleading-character-class": "warn",

      //"no-prototype-builtins": "error",
      //"no-useless-catch": "error",

      //disallows a && b || c use brackets for these


      //"no-unneeded-ternary": ["error", { "defaultAssignment": false }],

      //"no-unsafe-finally": "error", future

      //"no-unsafe-negation": "error", future


      //"no-useless-call": "warn",

      //"no-this-before-super": "warn", future

      //"no-throw-literal": "warn",

      // "no-useless-computed-key": "error", future
      //"no-useless-constructor": "error",
      //"no-useless-escape": "error",
      //"no-useless-rename": "error", future
      //"no-useless-return": "warn",
      //"no-void": "error",

      //"no-whitespace-before-property": "error", future
      //"no-with": "error",
      // "object-curly-newline": [
      //   "error",
      //   { "multiline": true, "consistent": true }
      // ],
      //"object-curly-spacing": ["error", "always"],

      //discuss future
      // "object-property-newline": [
      //   "warn",
      //   { "allowmultiplepropertiesperline": true }
      // ],

    // obj["bar"] should be obj.bar
    //"dot-notation": ["warn", { "allowKeywords": true }], future


      //"no-new": "error", future
      //"no-new-func": "error",
      //"no-new-object": "error",
      //"no-new-symbol": "error",
      //"no-new-wrappers": "error",

      // no math = new Math() use direct Math instead
      //"no-obj-calls": "warn",

      //"no-octal": "error",
      //"no-octal-escape": "error",
      //"no-proto": "error", future
      //"no-redeclare": ["error", { "builtinGlobals": false }],
      //"no-regex-spaces": "error",
      //"no-return-assign": ["error", "except-parens"], future


      //"one-var": ["error", { "initialized": "never" }],
      // "operator-linebreak": [
      //   "error",
      //   "after",
      //   { "overrides": { "?": "before", ":": "before", "|>": "before" } }
      // ],
      //"prefer-const": ["warn", { "destructuring": "all" }], future
      //"prefer-promise-reject-errors": "warn",
      //"prefer-regex-literals": ["warn", { "disallowRedundantWrapping": true }],
      //quotes
      // "quotes": [
      //   "warn",
      //   "single",
      //   { "avoidEscape": true, "allowTemplateLiterals": false }
      // ],


      //"rest-spread-spacing": ["warn", "never"], future

      //"semi": ["error", "never"],
      //"semi-spacing": ["error", { "before": false, "after": true }], future
      //"space-before-blocks": ["warn", "always"], future
      //"space-before-function-paren": ["error", "always"],

      // no space after if(x===2) formating discuss
      //"space-in-parens": ["error", "never"],
      //"space-infix-ops": "warn", future
      //"space-unary-ops": ["warn", { "words": true, "nonwords": false }], future
      //"symbol-description": "error",
      //"template-curly-spacing": ["error", "never"],
      //"template-tag-spacing": ["error", "never"],
      //"unicode-bom": ["error", "never"],
      // "use-isnan": [
      //   "error",
      //   {
      //     "enforceForSwitchCase": true,
      //     "enforceForIndexOf": true
      //   }
      // ],
      //"yield-star-spacing": ["error", "both"],
      //"yoda": ["error", "never"]

  }
}
