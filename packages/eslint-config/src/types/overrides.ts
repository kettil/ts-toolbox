import type { Globals } from './globals';
import type { Parser } from './parser';
import type { ParserOptions } from './parserOptions';
import type { Rules } from './rules';

type Overrides = Array<{
  files: string[];
  excludedFiles?: string[];
  rules: Rules;
  globals?: Globals;
  parser?: Parser;
  parserOptions?: ParserOptions;
}>;

export type { Overrides };
