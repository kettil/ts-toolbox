const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, Math.max(Math.ceil(ms), 0)));

export default delay;
