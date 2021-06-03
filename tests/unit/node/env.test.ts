import { env } from '../../../src/node/env';

const envKey = `TEST_RANDOM_${Date.now()}`;

describe('arrayUnique()', () => {
  afterEach(() => {
    delete process.env[envKey];
  });

  test('it should work with env value (string)', () => {
    process.env[envKey] = 'example.com';

    const value = env(envKey, 'localhost');

    expect(value).toBe('example.com');
  });

  test('it should work without env value (string)', () => {
    const value = env(envKey, 'localhost');

    expect(value).toBe('localhost');
  });

  test('it should work with env value (number)', () => {
    process.env[envKey] = '8080';

    const value = env(envKey, 3000);

    expect(value).toBe(8080);
  });

  test('it should work without env value (number)', () => {
    const value = env(envKey, 3000);

    expect(value).toBe(3000);
  });

  test('it should work with a function', () => {
    const value = env(envKey, () => 'localhost:3000');

    expect(value).toBe('localhost:3000');
  });

  test('it should work without key', () => {
    const value = env();

    expect(typeof value).toBe('object');
    expect(value).not.toBeNull();
    expect(Array.isArray(value)).toBe(false);
  });

  test('it should throw an error without env', () => {
    expect(() => env(envKey)).toThrow(TypeError);
  });
});
