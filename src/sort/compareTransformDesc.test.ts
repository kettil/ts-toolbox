import compareTransformDesc from './compareTransformDesc';

const mockTransform = jest.fn((value: { count: number }) => value.count);

describe('compareTransformAsc()', () => {
  test('it should work', () => {
    const value = compareTransformDesc(mockTransform)({ count: 23 }, { count: 13 });

    expect(value).toBe(-10);
  });
});
