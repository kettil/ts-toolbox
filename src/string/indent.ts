type Indent = {
  (value: string, chars: string): string;
  (value: string, count?: number, char?: string): string;
};

const indent: Indent = (value: string, countOrChars: number | string = 2, char: string | undefined = ' '): string => {
  const chars = typeof countOrChars === 'number' ? char.repeat(countOrChars) : countOrChars;

  return value
    .split('\n')
    .map((v) => chars + v)
    .join('\n');
};

export default indent;
