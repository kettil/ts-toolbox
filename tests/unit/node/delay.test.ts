import delay from '../../../src/node/delay';

describe('delay()', () => {
  test('it should work', async () => {
    const now = Date.now();

    await delay(432);

    expect(Date.now() - now).toBeGreaterThanOrEqual(432);
  });

  test('it should work with equal 0', async () => {
    const now = Date.now();

    await delay(0);

    expect(Date.now() - now).toBeLessThan(5);
  });

  test('it should work with less than 0', async () => {
    const now = Date.now();

    await delay(-5);

    expect(Date.now() - now).toBeLessThan(5);
  });
});
