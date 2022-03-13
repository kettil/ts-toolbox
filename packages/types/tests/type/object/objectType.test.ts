import { assert, _ } from '../../../src/assert';
import type { ObjectType } from '../../../src/object/objectType';

type TypeWithNumber = ObjectType<number>;

assert(_ as TypeWithNumber, _ as Record<number | string, number>);
