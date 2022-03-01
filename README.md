# Toolbox

![Release](https://github.com/kettil/ts-toolbox/workflows/Release/badge.svg)

A collection (monorepo) of libraries for my Typescript projects.

| Library                                                       | Description                                |
| ------------------------------------------------------------- | ------------------------------------------ |
| [commitlint-config](./packages/commitlint-config)             | Global config for `commitlint`             |
| [eslint-config](./packages/eslint-config)                     | Global config for `eslint`                 |
| [semantic-release-config](./packages/semantic-release-config) | Global config for `semantic-release`       |
| [tools](./packages/tools)                                     | Functions that you need again and again... |

## Environment

After cloning the repo and installing the dependencies,
the projects must be built before the next step can be made.

```bash
// clone the repo
git clone https://github.com/kettil/ts-toolbox && cd ts-toolbox

// install and build
npm install && npm run build
```
