type ParserOptions = {
  project?: string;
  sourceType?: 'module';
  ecmaVersion?: 'latest';
  ecmaFeatures?: {
    globalReturn?: false;
    impliedStrict?: false;
    jsx?: true;
  };
};

export type { ParserOptions };
