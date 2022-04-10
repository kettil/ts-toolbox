import { CustomErrorAbstract } from '../../../src/lib/customErrorAbstract';

class CustomError extends CustomErrorAbstract<string> {}

describe('customErrorAbstract', () => {
  test('create a class based on CustomErrorAbstract', () => {
    const instance = new CustomError({
      code: 'Foo',
      message: 'Baz',
      statusCode: 404,
    });

    expect(instance).toBeInstanceOf(CustomErrorAbstract);
  });
});
