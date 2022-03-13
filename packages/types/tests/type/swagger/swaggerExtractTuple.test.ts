import { _, assert } from '../../../src/assert';
import type { SwaggerExtractTuple } from '../../../src/swagger/swaggerExtractTuple';

type TypeWithExtractTuple1 = SwaggerExtractTuple<[{ type: 'boolean' }, { type: 'string' }], ['0']>;

assert(_ as TypeWithExtractTuple1, _ as readonly [boolean, string | undefined]);
