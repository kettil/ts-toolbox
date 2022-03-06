const delay = async (ms: number): Promise<void> => {
  if (ms > 0) {
    await new Promise((resolve) => {
      setTimeout(resolve, Math.ceil(ms));
    });
  }
};

export { delay };
