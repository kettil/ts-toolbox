import { Globals } from './globals';
import { Parser } from './parser';
import { ParserOptions } from './parserOptions';
import { Rules } from './rules';

type Overrides = Array<{
  files: string[];
  excludedFiles?: string[];
  rules: Rules;
  globals?: Globals;
  parser?: Parser;
  parserOptions?: ParserOptions;
}>;

export type { Overrides };
