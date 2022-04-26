type CustomErrorProps = {
  readonly message?: string;
  readonly data?: Record<string, unknown>;
  readonly cause?: Error['cause'];
};

export type { CustomErrorProps };
