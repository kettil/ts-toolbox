import { _, assert } from '../../../src/assert';
import type { SwaggerExtractProperty } from '../../../src/swagger/swaggerExtractProperty';

//  Null

type TypeWithExtractPropertyNull1 = SwaggerExtractProperty<{ type: 'null' }, false>;

assert(_ as TypeWithExtractPropertyNull1, _ as never);

type TypeWithExtractPropertyNull2 = SwaggerExtractProperty<{ type: 'null' }, true>;

assert(_ as TypeWithExtractPropertyNull2, _ as never);

//  Boolean

type TypeWithExtractPropertyBoolean1 = SwaggerExtractProperty<{ type: 'boolean' }, false>;

assert(_ as TypeWithExtractPropertyBoolean1, _ as boolean | undefined);

type TypeWithExtractPropertyBoolean2 = SwaggerExtractProperty<{ type: 'boolean' }, true>;

assert(_ as TypeWithExtractPropertyBoolean2, _ as boolean);

//  String

type TypeWithExtractPropertyString1 = SwaggerExtractProperty<{ type: 'string' }, false>;

assert(_ as TypeWithExtractPropertyString1, _ as string | undefined);

type TypeWithExtractPropertyString2 = SwaggerExtractProperty<{ type: 'string' }, true>;

assert(_ as TypeWithExtractPropertyString2, _ as string);

type TypeWithExtractPropertyString3 = SwaggerExtractProperty<{ type: 'string'; default: '' }, false>;

assert(_ as TypeWithExtractPropertyString3, _ as string);

type TypeWithExtractPropertyString4 = SwaggerExtractProperty<{ type: 'string'; default: '' }, true>;

assert(_ as TypeWithExtractPropertyString4, _ as string);

//  Number

type TypeWithExtractPropertyNumber1 = SwaggerExtractProperty<{ type: 'integer' }, false>;

assert(_ as TypeWithExtractPropertyNumber1, _ as number | undefined);

type TypeWithExtractPropertyNumber2 = SwaggerExtractProperty<{ type: 'integer' }, true>;

assert(_ as TypeWithExtractPropertyNumber2, _ as number);

type TypeWithExtractPropertyNumber3 = SwaggerExtractProperty<{ type: 'integer'; default: 0 }, false>;

assert(_ as TypeWithExtractPropertyNumber3, _ as number);

type TypeWithExtractPropertyNumber4 = SwaggerExtractProperty<{ type: 'integer'; default: 0 }, true>;

assert(_ as TypeWithExtractPropertyNumber4, _ as number);

//  Array

type TypeWithExtractPropertyArray1 = SwaggerExtractProperty<{ type: 'array'; items: { type: 'number' } }, false>;

assert(_ as TypeWithExtractPropertyArray1, _ as readonly number[] | undefined);

type TypeWithExtractPropertyArray2 = SwaggerExtractProperty<{ type: 'array'; items: { type: 'number' } }, true>;

assert(_ as TypeWithExtractPropertyArray2, _ as readonly number[]);

//  Tuple

type TypeWithExtractPropertyTupel1 = SwaggerExtractProperty<
  { type: 'array'; items: [{ type: 'string' }, { type: 'string' }]; minItems: 1; maxItems: 1 },
  false
>;

assert(_ as TypeWithExtractPropertyTupel1, _ as readonly [string, string | undefined] | undefined);

type TypeWithExtractPropertyTupel2 = SwaggerExtractProperty<
  { type: 'array'; items: [{ type: 'string' }, { type: 'string' }]; minItems: 2; maxItems: 2 },
  true
>;

assert(_ as TypeWithExtractPropertyTupel2, _ as readonly [string, string]);

// Object

type TypeWithExtractPropertyObject1 = SwaggerExtractProperty<
  { type: 'object'; properties: { foo: { type: 'string' } } },
  false
>;

assert(_ as TypeWithExtractPropertyObject1, _ as { readonly foo?: string | undefined } | undefined);

type TypeWithExtractPropertyObject2 = SwaggerExtractProperty<
  { type: 'object'; properties: { foo: { type: 'string' } } },
  true
>;

assert(_ as TypeWithExtractPropertyObject2, _ as { readonly foo?: string | undefined });

type TypeWithExtractPropertyObject3 = SwaggerExtractProperty<
  { type: 'object'; required: ['foo']; properties: { foo: { type: 'string' } } },
  false
>;

assert(_ as TypeWithExtractPropertyObject3, _ as { readonly foo: string } | undefined);

type TypeWithExtractPropertyObject4 = SwaggerExtractProperty<
  { type: 'object'; required: ['foo']; properties: { foo: { type: 'string' } } },
  true
>;

assert(_ as TypeWithExtractPropertyObject4, _ as { readonly foo: string });
