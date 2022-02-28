type Dummy = (...args: unknown[]) => unknown;

const dummy: Dummy = () => {
  // empty function
};

export { dummy };
