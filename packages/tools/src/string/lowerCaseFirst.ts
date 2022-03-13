// eslint-disable-next-line unicorn/prefer-at -- charAt does not return undefined
const lowerCaseFirst = (value: string): string => value.charAt(0).toLowerCase() + value.slice(1);

export { lowerCaseFirst };
