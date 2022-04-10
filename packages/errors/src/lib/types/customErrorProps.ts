type CustomErrorProps<ErrorCode extends string> = {
  readonly code: ErrorCode;
  readonly message: string;
  readonly statusCode: number;
  readonly data?: Record<number | string, unknown>;
  readonly cause?: Error['cause'];
};

export type { CustomErrorProps };
