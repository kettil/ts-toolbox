const toCamelCase = (value: string): string => {
  if (value.trim() === '') {
    return '';
  }

  return value
    .replace(/([A-Z])/gu, ' $1')
    .trim()
    .split(/[^\da-z]/iu)
    .map((v, i) => (i === 0 ? v[0].toLowerCase() : v[0].toUpperCase()) + v.slice(1).toLowerCase())
    .join('');
};

export { toCamelCase };
