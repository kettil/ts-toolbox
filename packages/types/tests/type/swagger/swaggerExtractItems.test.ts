import { _, assert } from '../../../src/assert';
import type { SwaggerExtractItems } from '../../../src/swagger/swaggerExtractItems';

type TypeWithExtractItems = SwaggerExtractItems<{ type: 'array'; items: { type: 'string' } }>;

assert(_ as TypeWithExtractItems, _ as readonly string[]);

type TypeWithExtractItem = SwaggerExtractItems<{
  type: 'array';
  items: [{ type: 'string' }, { type: 'string' }];
  minItems: 2;
  maxItems: 2;
}>;

assert(_ as TypeWithExtractItem, _ as readonly [string, string]);
