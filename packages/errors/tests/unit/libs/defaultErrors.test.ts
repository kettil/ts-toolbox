import { CustomAggregateErrorAbstract } from '../../../src/lib/customAggregateErrorAbstract';
import { CustomErrorAbstract } from '../../../src/lib/customErrorAbstract';
import { defaultErrors, defaultAggregateErrors } from '../../../src/lib/defaultErrors';
import type { CustomErrorClass } from '../../../src/lib/types/customErrorClass';

describe('defaultErrors', () => {
  test.each(Object.entries(defaultErrors))(
    '%p is a instance of CustomErrorAbstract',
    (_, ErrorClass: CustomErrorClass<string, string[] | undefined>) => {
      const instance = new ErrorClass({ data: { serviceName: '', valueType: '' } });

      expect(instance).toBeInstanceOf(CustomErrorAbstract);
    },
  );
});

describe('defaultAggregateErrors', () => {
  test.each(Object.entries(defaultAggregateErrors))(
    '%p is a instance of CustomAggregateErrorAbstract',
    (_, ErrorClass) => {
      const instance = new ErrorClass([]);

      expect(instance).toBeInstanceOf(CustomAggregateErrorAbstract);
    },
  );
});
