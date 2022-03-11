// eslint-disable-next-line unicorn/prefer-at -- charAt does not return undefined
const upperCaseFirst = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);

export { upperCaseFirst };
