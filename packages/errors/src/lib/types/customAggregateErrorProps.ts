type CustomAggregateErrorProps = {
  readonly message?: string;
  readonly data?: Record<string, unknown>;
  readonly errors: Array<AggregateError | Error>;
};

export type { CustomAggregateErrorProps };
