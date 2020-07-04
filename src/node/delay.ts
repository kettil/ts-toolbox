const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, Math.max(Math.ceil(ms), 0)));

export default delay;
