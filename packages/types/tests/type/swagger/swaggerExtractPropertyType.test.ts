import { _, assert } from '../../../src/assert';
import type { SwaggerExtractPropertyType } from '../../../src/swagger/swaggerExtractPropertyType';

type TypeWithExtractPropertyType1 = SwaggerExtractPropertyType<string, false>;

assert(_ as TypeWithExtractPropertyType1, _ as string | undefined);

type TypeWithExtractPropertyType2 = SwaggerExtractPropertyType<string, true>;

assert(_ as TypeWithExtractPropertyType2, _ as string);
