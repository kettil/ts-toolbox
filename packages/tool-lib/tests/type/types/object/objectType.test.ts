import { Expect } from '../../../../src/types/expect';
import { ObjectType } from '../../../../src/types/object/objectType';

type ObjectType1Value = ObjectType;
export type ObjectType1Test = Expect<ObjectType1Value, Record<number | string, unknown>, true>;
