type ParserOptions = {
  project?: string;
  sourceType?: 'module';
  ecmaVersion?: 2020;
  ecmaFeatures?: {
    globalReturn?: false;
    impliedStrict?: false;
    jsx?: true;
  };
};

export type { ParserOptions };
