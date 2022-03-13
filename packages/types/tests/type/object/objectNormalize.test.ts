import { assert, _ } from '../../../src/assert';
import type { ObjectNormalize } from '../../../src/object/objectNormalize';

type TypeWithSimpleObject = ObjectNormalize<{
  a: string;
  b: { c: string | undefined; d?: number } | undefined;
  e: [number, number, string];
  f: boolean[] | undefined;
}>;

assert(
  _ as TypeWithSimpleObject,
  _ as {
    readonly a: string;
    readonly b?: {
      readonly c?: string | undefined;
      readonly d?: number | undefined;
    };
    readonly e: readonly [number, number, string];
    readonly f?: boolean[] | undefined;
  },
);

assert(
  // @ts-expect-error -- optional value are not marked with a question mark
  _ as TypeWithSimpleObject,
  _ as {
    readonly a: string;
    readonly b:
    | {
      readonly c: string | undefined;
      readonly d: number | undefined;
    }
    | undefined;
    readonly e: readonly [number, number, string];
    readonly f: boolean[] | undefined;
  },
);
