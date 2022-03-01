type Extension = '.d.ts' | '.js' | '.jsx' | '.ts' | '.tsx';

interface Settings {
  react?: { version?: 'detect' };
  'import/extensions'?: readonly Extension[];
  'import/external-module-folders'?: ['node_modules', 'node_modules/@types'];
  'import/parsers'?: {
    '@typescript-eslint/parser'?: readonly Extension[];
  };
  'import/resolver'?: {
    node?: { extensions?: readonly Extension[] };
  };
}

export type { Settings };
