type CustomAggregateErrorProps<ErrorCode extends string> = {
  readonly code: ErrorCode;
  readonly errors: Array<AggregateError | Error>;
  readonly message: string;
  readonly statusCode: number;
  readonly data?: Record<number | string, unknown>;
};

export type { CustomAggregateErrorProps };
