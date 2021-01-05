import { Range } from './common';
import { ObjectNormalize } from './object';

type SwaggerPropertyCommon = {
  description?: string;

  // Additional possible parameters
  readOnly?: boolean;
  writeOnly?: boolean;
};

export type SwaggerPropertyNull = SwaggerPropertyCommon & { type: 'null' };

export type SwaggerPropertyBoolean = SwaggerPropertyCommon & { type: 'boolean' };

export type SwaggerPropertyString = SwaggerPropertyCommon & {
  type: 'string';

  // Additional possible parameters
  default?: string;
  minLength?: number;
  maxLength?: number;
  nullable?: boolean;
  enum?: readonly string[];
  pattern?: string;
  format?: 'date-time' | 'date' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'uri' | 'uuid';
};

export type SwaggerPropertyNumber = SwaggerPropertyCommon & {
  type: 'integer' | 'number';

  // Additional possible parameters
  default?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean;
  exclusiveMaximum?: boolean;
  multipleOf?: number;
};

export type SwaggerPropertyObject = SwaggerPropertyCommon & {
  type: 'object';
  properties: Record<string, SwaggerProperty>;

  // Additional possible parameters
  required?: readonly string[];
};

export type SwaggerPropertyArray = SwaggerPropertyCommon & {
  // Array
  type: 'array';
  items: SwaggerProperty;

  // Additional possible parameters
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
};

export type SwaggerPropertyTuple = SwaggerPropertyCommon & {
  type: 'array';
  items: readonly SwaggerPropertySimple[];
  minItems: number;
  maxItems: number;
};

export type SwaggerPropertySimple =
  | SwaggerPropertyBoolean
  | SwaggerPropertyNull
  | SwaggerPropertyNumber
  | SwaggerPropertyString;

export type SwaggerProperty =
  | SwaggerPropertyArray
  | SwaggerPropertyObject
  | SwaggerPropertySimple
  | SwaggerPropertyTuple;

export type SwaggerRequiredValidation<
  Props extends SwaggerPropertyObject,
  K extends number | string | symbol
> = Props['required'] extends readonly unknown[] ? (K extends Props['required'][number] ? true : false) : false;

export type SwaggerExtractTuple<Items extends SwaggerPropertyTuple['items'], A extends readonly string[]> = {
  [K in keyof Items]: Items[K] extends SwaggerPropertySimple
    ? SwaggerExtractProperty<Items[K], K extends A[number] ? true : false>
    : never;
};

export type SwaggerExtractPropertyType<Type, Optional> = Optional extends true ? Type : Type | undefined;

export type SwaggerExtractItems<
  Props extends SwaggerPropertyArray | SwaggerPropertyTuple
> = Props extends SwaggerPropertyArray
  ? ReadonlyArray<SwaggerExtractProperty<Props['items'], true>>
  : Props extends SwaggerPropertyTuple
    ? SwaggerExtractTuple<Props['items'], Range<Props['minItems']>>
    : never;

export type SwaggerExtractProperty<
  Props extends SwaggerProperty,
  Required extends boolean = false
> = Props['type'] extends 'boolean'
  ? SwaggerExtractPropertyType<boolean, Required>
  : Props extends SwaggerPropertyString
    ? SwaggerExtractPropertyType<string, Props['default'] extends string ? true : Required>
    : Props extends SwaggerPropertyNumber
      ? SwaggerExtractPropertyType<number, Props['default'] extends number ? true : Required>
      : Props extends SwaggerPropertyArray | SwaggerPropertyTuple
        ? SwaggerExtractPropertyType<SwaggerExtractItems<Props>, Required>
        : Props extends SwaggerPropertyObject
          ? SwaggerExtractPropertyType<SwaggerExtractProperties<Props>, Required>
          : never;

export type SwaggerExtractProperties<Props extends SwaggerPropertyObject> = ObjectNormalize<
  {
    readonly [K in keyof Props['properties']]: SwaggerExtractProperty<
      Props['properties'][K],
      SwaggerRequiredValidation<Props, K>
    >;
  }
>;
