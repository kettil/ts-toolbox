import { Expect } from './common';
import {
  SwaggerExtractItems,
  SwaggerExtractProperties,
  SwaggerExtractProperty,
  SwaggerExtractPropertyType,
  SwaggerExtractTuple,
  SwaggerProperty,
  SwaggerPropertyArray,
  SwaggerPropertyBoolean,
  SwaggerPropertyNull,
  SwaggerPropertyNumber,
  SwaggerPropertyObject,
  SwaggerPropertySimple,
  SwaggerPropertyString,
  SwaggerPropertyTuple,
  SwaggerRequiredValidation,
} from './swagger';

//
// Types
//

export const testSwaggerPropertyNull1: SwaggerPropertyNull = { type: 'null' };
export const testSwaggerPropertyNull2: Required<SwaggerPropertyNull> = {
  type: 'null',
  description: 'description',
  readOnly: true,
  writeOnly: false,
};

export const testSwaggerPropertyBoolean1: SwaggerPropertyBoolean = { type: 'boolean' };
export const testSwaggerPropertyBoolean2: Required<SwaggerPropertyBoolean> = {
  type: 'boolean',
  description: 'description',
  readOnly: true,
  writeOnly: false,
};

export const testSwaggerPropertyString1: SwaggerPropertyString = { type: 'string' };
export const testSwaggerPropertyString2: Required<SwaggerPropertyString> = {
  type: 'string',
  description: 'description',
  readOnly: true,
  writeOnly: false,
  default: 'default',
  minLength: 0,
  maxLength: 10,
  nullable: true,
  enum: ['a', 'b'],
  pattern: 'pattern',
  format: 'date',
};

export const testSwaggerPropertyNumber1: SwaggerPropertyNumber = { type: 'integer' };
export const testSwaggerPropertyNumber2: SwaggerPropertyNumber = { type: 'number' };
export const testSwaggerPropertyNumber3: Required<SwaggerPropertyNumber> = {
  type: 'integer',
  description: 'description',
  readOnly: true,
  writeOnly: false,
  default: 5,
  minimum: 0,
  maximum: 10,
  exclusiveMinimum: true,
  exclusiveMaximum: true,
  multipleOf: 2,
};

export const testSwaggerPropertyObject1: SwaggerPropertyObject = { type: 'object', properties: {} };
export const testSwaggerPropertyObject2: Required<SwaggerPropertyObject> = {
  type: 'object',
  properties: {
    valueNull: { type: 'null' },
    valueBoolean: { type: 'boolean' },
    valueString: { type: 'string' },
    valueNumber: { type: 'number' },
    valueObject: { type: 'object', properties: {} },
    valueArray: { type: 'array', items: { type: 'integer' } },
  },
  description: 'description',
  readOnly: true,
  writeOnly: false,
  required: ['number'],
};

export const testSwaggerPropertyArray1: SwaggerPropertyArray = { type: 'array', items: { type: 'number' } };
export const testSwaggerPropertyArray2: Required<SwaggerPropertyArray> = {
  type: 'array',
  items: { type: 'string' },
  description: 'description',
  readOnly: true,
  writeOnly: false,
  minItems: 0,
  maxItems: 10,
  uniqueItems: true,
};

export const testSwaggerPropertyTuple1: SwaggerPropertyTuple = {
  type: 'array',
  items: [{ type: 'number' }],
  minItems: 1,
  maxItems: 1,
};
export const testSwaggerPropertyTuple2: Required<SwaggerPropertyTuple> = {
  type: 'array',
  items: [{ type: 'number' }, { type: 'number' }],
  description: 'description',
  readOnly: false,
  writeOnly: true,
  minItems: 1,
  maxItems: 2,
};

//
// Generics
//

// SwaggerPropertySimple

export type SwaggerPropertySimple1Test = Expect<
  SwaggerPropertySimple,
  SwaggerPropertyNull | SwaggerPropertyBoolean | SwaggerPropertyString | SwaggerPropertyNumber,
  true
>;

// SwaggerProperty

export type SwaggerProperty1Test = Expect<
  SwaggerProperty,
  SwaggerPropertySimple | SwaggerPropertyObject | SwaggerPropertyArray | SwaggerPropertyTuple,
  true
>;

// SwaggerRequiredValidation

type SwaggerRequiredValidation1Value = SwaggerRequiredValidation<
  { type: 'object'; properties: { a: { type: 'boolean' } }; required: ['a'] },
  'a'
>;
export type SwaggerRequiredValidation1Test = Expect<SwaggerRequiredValidation1Value, true, true>;

type SwaggerRequiredValidation2Value = SwaggerRequiredValidation<
  { type: 'object'; properties: { a: { type: 'boolean' } }; required: ['b'] },
  'a'
>;
export type SwaggerRequiredValidation2Test = Expect<SwaggerRequiredValidation2Value, true, false>;

type SwaggerRequiredValidation3Value = SwaggerRequiredValidation<
  { type: 'object'; properties: { a: { type: 'boolean' } } },
  'a'
>;
export type SwaggerRequiredValidation3Test = Expect<SwaggerRequiredValidation3Value, true, false>;

// SwaggerExtractTuple

type SwaggerExtractTuple1Value = SwaggerExtractTuple<[{ type: 'boolean' }, { type: 'string' }], ['0']>;
export type SwaggerExtractTuple1Test = Expect<SwaggerExtractTuple1Value, [boolean, string | undefined], true>;

// SwaggerExtractPropertyType

type SwaggerExtractPropertyType1Value = SwaggerExtractPropertyType<string, true>;
export type SwaggerExtractPropertyType1Test = Expect<SwaggerExtractPropertyType1Value, string, true>;

type SwaggerExtractPropertyType2Value = SwaggerExtractPropertyType<number, false>;
export type SwaggerExtractPropertyType2Test = Expect<SwaggerExtractPropertyType2Value, number | undefined, true>;

// SwaggerExtractItems

type SwaggerExtractItems1Value = SwaggerExtractItems<{ type: 'array'; items: { type: 'string' } }>;
export type SwaggerExtractItems1Test = Expect<SwaggerExtractItems1Value, readonly string[], true>;

type SwaggerExtractItems2Value = SwaggerExtractItems<{
  type: 'array';
  items: [{ type: 'string' }];
  minItems: 1;
  maxItems: 1;
}>;
export type SwaggerExtractItems2Test = Expect<SwaggerExtractItems2Value, [string], true>;

// SwaggerExtractProperty - Null

type SwaggerExtractPropertyNull1Value = SwaggerExtractProperty<{ type: 'null' }, false>;
export type SwaggerExtractPropertyNull1Test = Expect<SwaggerExtractPropertyNull1Value, never, true>;
type SwaggerExtractPropertyNull2Value = SwaggerExtractProperty<{ type: 'null' }, true>;
export type SwaggerExtractPropertyNull2Test = Expect<SwaggerExtractPropertyNull2Value, never, true>;

// SwaggerExtractProperty - Boolean

type SwaggerExtractPropertyBoolean1Value = SwaggerExtractProperty<{ type: 'boolean' }, false>;
export type SwaggerExtractPropertyBoolean1Test = Expect<SwaggerExtractPropertyBoolean1Value, boolean | undefined, true>;
type SwaggerExtractPropertyBoolean2Value = SwaggerExtractProperty<{ type: 'boolean' }, true>;
export type SwaggerExtractPropertyBoolean2Test = Expect<SwaggerExtractPropertyBoolean2Value, boolean, true>;

// SwaggerExtractProperty - String

type SwaggerExtractPropertyString1Value = SwaggerExtractProperty<{ type: 'string' }, false>;
export type SwaggerExtractPropertyString1Test = Expect<SwaggerExtractPropertyString1Value, string | undefined, true>;
type SwaggerExtractPropertyString2Value = SwaggerExtractProperty<{ type: 'string' }, true>;
export type SwaggerExtractPropertyString2Test = Expect<SwaggerExtractPropertyString2Value, string, true>;
type SwaggerExtractPropertyString3Value = SwaggerExtractProperty<{ type: 'string'; default: '' }, false>;
export type SwaggerExtractPropertyString3Test = Expect<SwaggerExtractPropertyString3Value, string, true>;
type SwaggerExtractPropertyString4Value = SwaggerExtractProperty<{ type: 'string'; default: '' }, true>;
export type SwaggerExtractPropertyString4Test = Expect<SwaggerExtractPropertyString4Value, string, true>;

// SwaggerExtractProperty - Number

type SwaggerExtractPropertyNumber1Value = SwaggerExtractProperty<{ type: 'integer' }, false>;
export type SwaggerExtractPropertyNumber1Test = Expect<SwaggerExtractPropertyNumber1Value, number | undefined, true>;
type SwaggerExtractPropertyNumber2Value = SwaggerExtractProperty<{ type: 'integer' }, true>;
export type SwaggerExtractPropertyNumber2Test = Expect<SwaggerExtractPropertyNumber2Value, number, true>;
type SwaggerExtractPropertyNumber3Value = SwaggerExtractProperty<{ type: 'integer'; default: 0 }, false>;
export type SwaggerExtractPropertyNumber3Test = Expect<SwaggerExtractPropertyNumber3Value, number, true>;
type SwaggerExtractPropertyNumber4Value = SwaggerExtractProperty<{ type: 'integer'; default: 0 }, true>;
export type SwaggerExtractPropertyNumber4Test = Expect<SwaggerExtractPropertyNumber4Value, number, true>;

// SwaggerExtractProperty - Array

type SwaggerExtractPropertyArray1Value = SwaggerExtractProperty<{ type: 'array'; items: { type: 'number' } }, false>;
export type SwaggerExtractPropertyArray1Test = Expect<
  SwaggerExtractPropertyArray1Value,
  readonly number[] | undefined,
  true
>;
type SwaggerExtractPropertyArray2Value = SwaggerExtractProperty<{ type: 'array'; items: { type: 'number' } }, true>;
export type SwaggerExtractPropertyArray2Test = Expect<SwaggerExtractPropertyArray2Value, readonly number[], true>;

// SwaggerExtractProperty - Tuple

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

// SwaggerExtractProperty - Object

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

// SwaggerExtractProperties

type SwaggerExtractProperties1Value = SwaggerExtractProperties<{
  type: 'object';
  required: ['buzz'];
  properties: { foo: { type: 'string' }; buzz: { type: 'array'; items: { type: 'integer' } } };
}>;
export type SwaggerExtractProperties1Test = Expect<
  SwaggerExtractProperties1Value,
  { readonly foo?: string | undefined; readonly buzz: readonly number[] },
  true
>;

type SwaggerExtractProperties2Value = SwaggerExtractProperties<{
  type: 'object';
  required: ['buzz'];
  properties: {
    buzz: { type: 'array'; items: [{ type: 'integer' }, { type: 'integer' }]; minItems: 1; maxItems: 1 };
  };
}>;
export type SwaggerExtractProperties2Test = Expect<
  SwaggerExtractProperties2Value,
  { readonly buzz: readonly [number, number | undefined] },
  true
>;

// Schema

const schema = {
  type: 'object',
  required: ['meta', 'links', 'data'],
  properties: {
    meta: {
      type: 'object',
      required: ['count', 'page'],
      properties: {
        count: { type: 'integer' },
        page: { type: 'integer' },
      },
    },
    links: {
      type: 'object',
      required: ['self', 'first', 'prev', 'next', 'last'],
      properties: {
        self: { type: 'string' },
        first: { type: 'string' },
        prev: { type: 'string' },
        next: { type: 'string' },
        last: { type: 'string' },
      },
    },

    data: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'title', 'text', 'author', 'createdAt'],
        properties: {
          id: { type: 'string', format: 'uuid' },
          categories: { type: 'array', items: { type: 'string' } },
          createdAt: { type: 'string', format: 'date-time' },
          title: { type: 'string' },
          text: { type: 'string' },
          author: { type: 'string' },
          readTime: { type: 'integer' },
          status: { type: 'array', items: [{ type: 'integer' }, { type: 'string' }], minItems: 2, maxItems: 2 },
          publish: { type: 'boolean' },
        },
      },
    },
  },
} as const;

type SchemaType = SwaggerExtractProperties<typeof schema>;
export type SchemaTest = Expect<
  SchemaType,
  {
    readonly meta: { readonly count: number; readonly page: number };
    readonly links: {
      readonly self: string;
      readonly first: string;
      readonly prev: string;
      readonly next: string;
      readonly last: string;
    };

    readonly data: ReadonlyArray<{
      readonly id: string;
      readonly categories?: readonly string[];
      readonly createdAt: string;
      readonly title: string;
      readonly text: string;
      readonly author: string;
      readonly readTime?: number;
      readonly status?: readonly [number, string] | undefined;
      readonly publish?: boolean;
    }>;
  },
  true
>;
