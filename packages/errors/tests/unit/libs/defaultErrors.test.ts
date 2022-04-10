import { CustomErrorAbstract } from '../../../src/lib/customErrorAbstract';
import { defaultErrors } from '../../../src/lib/defaultErrors';

describe('defaultErrors', () => {
  test.each(Object.entries(defaultErrors))('%p is a instance of CustomErrorAbstract', (_, ErrorClass) => {
    const instance = new ErrorClass();

    expect(instance).toBeInstanceOf(CustomErrorAbstract);
  });
});
