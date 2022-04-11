type CustomAggregateErrorParameter = {
  readonly errors: Array<AggregateError | Error>;
  readonly message?: string;
  readonly statusCode?: number;
  readonly data?: Record<number | string, unknown>;
};

export type { CustomAggregateErrorParameter };
