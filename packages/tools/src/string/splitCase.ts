const splitCase = (value: string): string[] =>
  value
    .trim()
    .replace(/[^\dA-Za-z]+|([\da-z])([A-Z])/gu, '$1 $2')
    .toLowerCase()
    .trim()
    .split(' ');

export { splitCase };
