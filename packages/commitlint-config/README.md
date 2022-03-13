# commitlint-config

[![npm](https://img.shields.io/npm/v/@kettil/commitlint-config)](https://www.npmjs.com/package/@kettil/commitlint-config)

The library contains the commitlint configuration.

## Installation

```bash
npm install -D @commitlint/config-conventional @commitlint/cli @kettil/commitlint-config
```

## Quick Start

To use this configuration, create the file `.commitlintrc.json` with the following content:

```json
{
  "extends": ["@kettil"]
}
```

You can find the list of rules in the [commitlint project](https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md).
