const toCamelCase = (value: string): string => value
  .replace(/([A-Z])/g, ' $1')
  .trim()
  .split(/[^\da-z]/i)
  .map((v, i) => (i === 0 ? v[0].toLowerCase() : v[0].toUpperCase()) + v.slice(1).toLowerCase())
  .join('');

export default toCamelCase;
