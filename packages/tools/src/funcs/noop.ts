type Noop = (...args: unknown[]) => unknown;

const noop: Noop = () => {
  // empty function
};

export { noop };
