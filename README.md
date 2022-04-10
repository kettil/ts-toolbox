# Toolbox

![Release](https://github.com/kettil/ts-toolbox/workflows/Release/badge.svg)

A collection (monorepo) of libraries for my Typescript projects.

| Library                                                               | Description                                  | Version                                                                                                                               |
| --------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [@kettil/commitlint-config](./packages/commitlint-config)             | Global config for `commitlint`               | [![npm](https://img.shields.io/npm/v/@kettil/commitlint-config)](https://www.npmjs.com/package/@kettil/commitlint-config)             |
| [@kettil/errors](./packages/errors)                                   | Simple creation of customized error classes. | [![npm](https://img.shields.io/npm/v/@kettil/errors)](https://www.npmjs.com/package/@kettil/errors)                                   |
| [@kettil/eslint-config](./packages/eslint-config)                     | Global config for `eslint`                   | [![npm](https://img.shields.io/npm/v/@kettil/eslint-config)](https://www.npmjs.com/package/@kettil/eslint-config)                     |
| [@kettil/semantic-release-config](./packages/semantic-release-config) | Global config for `semantic-release`         | [![npm](https://img.shields.io/npm/v/@kettil/semantic-release-config)](https://www.npmjs.com/package/@kettil/semantic-release-config) |
| [@kettil/tools](./packages/tools)                                     | Functions that you need again and again...   | [![npm](https://img.shields.io/npm/v/@kettil/tools)](https://www.npmjs.com/package/@kettil/tools)                                     |
| [@kettil/types](./packages/types)                                     | Types that you need again and again...       | [![npm](https://img.shields.io/npm/v/@kettil/types)](https://www.npmjs.com/package/@kettil/types)                                     |

## Environment

After cloning the repo and installing the dependencies,
the projects must be built before the next step can be made.

```bash
// clone the repo
git clone https://github.com/kettil/ts-toolbox && cd ts-toolbox

// install and build
npm install && npm run build
```
