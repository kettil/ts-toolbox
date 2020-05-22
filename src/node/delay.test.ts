import delay from './delay';

describe('arrayUnique()', () => {
  test('it should work', async () => {
    const now = Date.now();

    await delay(432);

    expect(Date.now() - now).toBeGreaterThanOrEqual(432);
  });
});
