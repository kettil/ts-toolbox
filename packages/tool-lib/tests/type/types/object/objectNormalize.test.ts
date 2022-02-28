import { Expect } from '../../../../src/types/expect';
import { ObjectNormalize } from '../../../../src/types/object/objectNormalize';

type ObjectNormalize1Value = ObjectNormalize<{
  a: string;
  b: { c: string | undefined; d?: number } | undefined;
  e: [number, number, string];
  f: boolean[] | undefined;
}>;
export type ObjectNormalize1Test = Expect<
  ObjectNormalize1Value,
  {
    readonly a: string;
    readonly b?: {
      readonly c?: string | undefined;
      readonly d?: number | undefined;
    };
    readonly e: readonly [number, number, string];
    readonly f?: boolean[] | undefined;
  },
  true
>;
