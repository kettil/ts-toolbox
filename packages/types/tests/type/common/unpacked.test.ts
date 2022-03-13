import { assert, _ } from '../../../src/assert';
import type { Unpacked } from '../../../src/common/unpacked';

type TypeWithArrayAndNumber = Unpacked<number[]>;

assert(_ as TypeWithArrayAndNumber, _ as number);
// @ts-expect-error -- only "number" is defined
assert(_ as TypeWithArrayAndNumber, _ as number | string);

type TypeWithArrayAndObject = Unpacked<Array<{ a: string; z: number }>>;

assert(_ as TypeWithArrayAndObject, _ as { a: string; z: number });
// @ts-expect-error -- key "b" is too much
assert(_ as TypeWithArrayAndObject, _ as { a: string; b: boolean; z: number });
// @ts-expect-error -- key "z" is missing
assert(_ as TypeWithArrayAndObject, _ as { a: string });

type TypeWithPromiseAndBoolean = Unpacked<Promise<boolean>>;

assert(_ as TypeWithPromiseAndBoolean, _ as boolean);
// @ts-expect-error -- only "boolean" is defined
assert(_ as TypeWithPromiseAndBoolean, _ as boolean | string);

type TypeWithSetAndString = Unpacked<Set<string>>;

assert(_ as TypeWithSetAndString, _ as string);
// @ts-expect-error -- only "string" is defined
assert(_ as TypeWithSetAndString, _ as boolean | string);
