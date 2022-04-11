import type { CustomAggregateErrorAbstract } from '../customAggregateErrorAbstract';
import type { CustomAggregateErrorParameter } from './customAggregateErrorParameter';
import type { CustomAggregateErrorProps } from './customAggregateErrorProps';

type CustomAggregateErrorClass<ErrorCode extends string = string> = {
  new (errors: CustomAggregateErrorProps<ErrorCode>['errors']): CustomAggregateErrorAbstract<ErrorCode>;
  new (metadata: CustomAggregateErrorParameter): CustomAggregateErrorAbstract<ErrorCode>;

  readonly code: ErrorCode;
};

export type { CustomAggregateErrorClass };
