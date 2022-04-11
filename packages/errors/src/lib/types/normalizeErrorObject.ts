type NormalizeErrorObject = {
  code: string;
  message: string;
  stack?: string[];
  data?: Record<number | string, unknown>;
  cause?: NormalizeErrorObject;
  errors?: NormalizeErrorObject[];
};

export type { NormalizeErrorObject };
