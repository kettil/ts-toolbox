# ESLint rules collection

The library is a collection of very strict ESLint rules.

## Installation

```bash
npm install eslint @kettil/eslint-config
```

The following additional ESLint plugins are included by default:

| Plugin                                                                                             | required                                               |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [eslint-plugin-formatjs](https://www.npmjs.com/package/eslint-plugin-formatjs)                     | -                                                      |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)                         | -                                                      |
| [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)                       | -                                                      |
| [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)               | typescript                                             |
| [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | typescript                                             |
| [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)                           | react                                                  |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)               | react                                                  |
| [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)                     | react                                                  |
| [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)                             | jest                                                   |
| [eslint-plugin-testing-library](https://www.npmjs.com/package/eslint-plugin-testing-library)       | @testing-library/react or @testing-library/react-hooks |
| [eslint-plugin-jest-dom](https://www.npmjs.com/package/eslint-plugin-jest-dom)                     | @testing-library/jest-dom                              |

If the required library is installed, the rules are activated automatically.
Additionally, rules are adjusted if the libraries next.js, and redux are installed.

## Quick Start

If you want to use the rule collection, create the file `.eslintrc.json` with the following content:

```json
{
  "extends": ["@kettil"]
}
```

or alternative for the browser `@kettil/eslint-config/browser`.
