import { Expect } from '../../../../src/types/expect';
import { SwaggerExtractProperty } from '../../../../src/types/swagger/swaggerExtractProperty';

//  Null

type SwaggerExtractPropertyNull1Value = SwaggerExtractProperty<{ type: 'null' }, false>;
export type SwaggerExtractPropertyNull1Test = Expect<SwaggerExtractPropertyNull1Value, never, true>;

type SwaggerExtractPropertyNull2Value = SwaggerExtractProperty<{ type: 'null' }, true>;
export type SwaggerExtractPropertyNull2Test = Expect<SwaggerExtractPropertyNull2Value, never, true>;

//  Boolean

type SwaggerExtractPropertyBoolean1Value = SwaggerExtractProperty<{ type: 'boolean' }, false>;
export type SwaggerExtractPropertyBoolean1Test = Expect<SwaggerExtractPropertyBoolean1Value, boolean | undefined, true>;

type SwaggerExtractPropertyBoolean2Value = SwaggerExtractProperty<{ type: 'boolean' }, true>;
export type SwaggerExtractPropertyBoolean2Test = Expect<SwaggerExtractPropertyBoolean2Value, boolean, true>;

//  String

type SwaggerExtractPropertyString1Value = SwaggerExtractProperty<{ type: 'string' }, false>;
export type SwaggerExtractPropertyString1Test = Expect<SwaggerExtractPropertyString1Value, string | undefined, true>;

type SwaggerExtractPropertyString2Value = SwaggerExtractProperty<{ type: 'string' }, true>;
export type SwaggerExtractPropertyString2Test = Expect<SwaggerExtractPropertyString2Value, string, true>;

type SwaggerExtractPropertyString3Value = SwaggerExtractProperty<{ type: 'string'; default: '' }, false>;
export type SwaggerExtractPropertyString3Test = Expect<SwaggerExtractPropertyString3Value, string, true>;

type SwaggerExtractPropertyString4Value = SwaggerExtractProperty<{ type: 'string'; default: '' }, true>;
export type SwaggerExtractPropertyString4Test = Expect<SwaggerExtractPropertyString4Value, string, true>;

//  Number

type SwaggerExtractPropertyNumber1Value = SwaggerExtractProperty<{ type: 'integer' }, false>;
export type SwaggerExtractPropertyNumber1Test = Expect<SwaggerExtractPropertyNumber1Value, number | undefined, true>;

type SwaggerExtractPropertyNumber2Value = SwaggerExtractProperty<{ type: 'integer' }, true>;
export type SwaggerExtractPropertyNumber2Test = Expect<SwaggerExtractPropertyNumber2Value, number, true>;

type SwaggerExtractPropertyNumber3Value = SwaggerExtractProperty<{ type: 'integer'; default: 0 }, false>;
export type SwaggerExtractPropertyNumber3Test = Expect<SwaggerExtractPropertyNumber3Value, number, true>;

type SwaggerExtractPropertyNumber4Value = SwaggerExtractProperty<{ type: 'integer'; default: 0 }, true>;
export type SwaggerExtractPropertyNumber4Test = Expect<SwaggerExtractPropertyNumber4Value, number, true>;

//  Array

type SwaggerExtractPropertyArray1Value = SwaggerExtractProperty<{ type: 'array'; items: { type: 'number' } }, false>;
export type SwaggerExtractPropertyArray1Test = Expect<
  SwaggerExtractPropertyArray1Value,
  readonly number[] | undefined,
  true
>;

type SwaggerExtractPropertyArray2Value = SwaggerExtractProperty<{ type: 'array'; items: { type: 'number' } }, true>;
export type SwaggerExtractPropertyArray2Test = Expect<SwaggerExtractPropertyArray2Value, readonly number[], true>;

//  Tuple

type SwaggerExtractPropertyTuple1Value = SwaggerExtractProperty<
  { type: 'array'; items: [{ type: 'string' }, { type: 'string' }]; minItems: 1; maxItems: 1 },
  false
>;
export type SwaggerExtractPropertyTuple1Test = Expect<
  SwaggerExtractPropertyTuple1Value,
  [string, string | undefined] | undefined,
  true
>;

type SwaggerExtractPropertyTuple2Value = SwaggerExtractProperty<
  { type: 'array'; items: [{ type: 'string' }]; minItems: 1; maxItems: 1 },
  true
>;
export type SwaggerExtractPropertyTuple2Test = Expect<SwaggerExtractPropertyTuple2Value, [string], true>;

// Object

type SwaggerExtractPropertyObject1Value = SwaggerExtractProperty<
  { type: 'object'; properties: { foo: { type: 'string' } } },
  false
>;
export type SwaggerExtractPropertyObject1Test = Expect<
  SwaggerExtractPropertyObject1Value,
  { readonly foo?: string | undefined } | undefined,
  true
>;

type SwaggerExtractPropertyObject2Value = SwaggerExtractProperty<
  { type: 'object'; properties: { foo: { type: 'string' } } },
  true
>;
export type SwaggerExtractPropertyObject2Test = Expect<
  SwaggerExtractPropertyObject2Value,
  { readonly foo?: string | undefined },
  true
>;

type SwaggerExtractPropertyObject3Value = SwaggerExtractProperty<
  { type: 'object'; required: ['foo']; properties: { foo: { type: 'string' } } },
  false
>;
export type SwaggerExtractPropertyObject3Test = Expect<
  SwaggerExtractPropertyObject3Value,
  { readonly foo: string },
  false
>;

type SwaggerExtractPropertyObject4Value = SwaggerExtractProperty<
  { type: 'object'; required: ['foo']; properties: { foo: { type: 'string' } } },
  true
>;
export type SwaggerExtractPropertyObject4Test = Expect<
  SwaggerExtractPropertyObject4Value,
  { readonly foo: string },
  true
>;
