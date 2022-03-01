import { createConfig } from '../../src';
import { hasLibrary } from '../../src/lib/hasLibrary';

jest.mock('../../src/lib/hasLibrary', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention -- special key
  __esModule: true,

  hasLibrary: jest.fn(),
}));

describe('createConfig()', () => {
  test('it should work and hasLibrary returns false', () => {
    (hasLibrary as jest.Mock).mockReturnValue(false);

    const config = createConfig();

    expect(config).toMatchSnapshot();
  });

  test('it should work and hasLibrary returns true', () => {
    (hasLibrary as jest.Mock).mockReturnValue(true);

    const config = createConfig();

    expect(config).toMatchSnapshot();
  });
});
