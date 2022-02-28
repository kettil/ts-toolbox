const delay = (ms: number): Promise<void> => {
  if (ms > 0) {
    return new Promise((resolve) => setTimeout(resolve, Math.ceil(ms)));
  }

  return Promise.resolve();
};

export { delay };
