# npm-package-json-lint-config rule collection

[![npm](https://img.shields.io/npm/v/@kettil/npm-package-json-lint-config)](https://www.npmjs.com/package/@kettil/npm-package-json-lint-config)

The library is a collection of npm-package-json-lint-config rules.
The rules can be viewed in the [npm-package-json-lint documentation](https://npmpackagejsonlint.org/docs/rules).

## Installation

```bash
npm install -D @kettil/npm-package-json-lint-config
```

## Quick Start

If you want to use the rule collection, create the file `.npmpackagejsonlintrc.json` with the following content:

```json
{
  "extends": "@kettil/npm-package-json-lint-config" // default - for a library
}
```

or an alternative rule collections:

- `@kettil/npm-package-json-lint-config/app` for an application
- `@kettil/npm-package-json-lint-config/cli` for a cli
- `@kettil/npm-package-json-lint-config/lib` for a library
- `@kettil/npm-package-json-lint-config/monorepo` for a monorepo
