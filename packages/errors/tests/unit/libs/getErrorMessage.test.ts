import { getErrorMessage } from '../../../src/lib/getErrorMessage';

describe('getErrorMessage()', () => {
  test('return "Foo." with message "Foo."', () => {
    const result = getErrorMessage({
      metadata: { message: 'Foo.' },
      defaultMessage: 'Default message.',
    });

    expect(result).toBe('Foo.');
  });

  test('return "Default message." without message', () => {
    const result = getErrorMessage({
      metadata: {},
      defaultMessage: 'Default message.',
    });

    expect(result).toBe('Default message.');
  });

  test('return "Default message." with empty message', () => {
    const result = getErrorMessage({
      metadata: {},
      defaultMessage: 'Default message.',
    });

    expect(result).toBe('Default message.');
  });
});
