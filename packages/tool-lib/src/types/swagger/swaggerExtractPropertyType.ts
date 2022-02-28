type SwaggerExtractPropertyType<Type, Optional> = Optional extends true ? Type : Type | undefined;

export type { SwaggerExtractPropertyType };
