import { _, assert } from '../../../src/assert';
import type { SwaggerExtractProperties } from '../../../src/swagger/swaggerExtractProperties';

type TypeWithExtractPropertiesWithArray = SwaggerExtractProperties<{
  type: 'object';
  required: ['buzz'];
  properties: { foo: { type: 'string' }; buzz: { type: 'array'; items: { type: 'integer' } } };
}>;

assert(
  _ as TypeWithExtractPropertiesWithArray,
  _ as { readonly foo?: string | undefined; readonly buzz: readonly number[] },
);

type TypeWithExtractPropertiesWithTupel = SwaggerExtractProperties<{
  type: 'object';
  required: ['buzz'];
  properties: {
    buzz: { type: 'array'; items: [{ type: 'integer' }, { type: 'integer' }]; minItems: 1; maxItems: 1 };
  };
}>;

assert(_ as TypeWithExtractPropertiesWithTupel, _ as { readonly buzz: readonly [number, number | undefined] });

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

type TypeWithExtractProperties = SwaggerExtractProperties<typeof schema>;

assert(
  _ as TypeWithExtractProperties,
  _ as {
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
);
