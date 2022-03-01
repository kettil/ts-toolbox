import type { Environment } from './environment';
import type { Globals } from './globals';
import type { Overrides } from './overrides';
import type { Parser } from './parser';
import type { ParserOptions } from './parserOptions';
import type { Plugins } from './plugins';
import type { Rules } from './rules';
import type { Settings } from './settings';

interface DefaultObject {
  env: Environment;
  rules: Rules;
  globals: Globals;
  settings: Settings;
  parserOptions: ParserOptions;
  parser: Parser;
  plugins: Plugins;
  overrides: Overrides;
}

export type { DefaultObject };
