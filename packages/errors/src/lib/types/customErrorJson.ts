type CustomErrorJson = {
  code: string;
  message: string;
  stack?: string[];
  data?: Record<number | string, unknown>;
  cause?: CustomErrorJson;
};

export type { CustomErrorJson };
