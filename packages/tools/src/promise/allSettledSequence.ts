import { indent } from '../string/indent';

const allSettledSequenceReduce = async (promise: Promise<Error[]>, task: () => Promise<void>): Promise<Error[]> =>
  promise.then(async (errors) => {
    try {
      await task();
    } catch (error: unknown) {
      if (error instanceof Error) {
        errors.push(error);
      } else {
        errors.push(new Error(`unknown error: ${indent(JSON.stringify(error, undefined, 2), 7).trimStart()}`));
      }
    }

    return errors;
  });

const allSettledSequence = async (tasks: Array<() => Promise<void>>): Promise<void> => {
  const errors = await tasks.reduce<Promise<Error[]>>(
    async (promise, task) => allSettledSequenceReduce(promise, task),
    Promise.resolve([]),
  );

  if (errors.length > 0) {
    /* istanbul ignore next */
    const errorMessages = errors.map((error) => error.stack ?? String(error));

    throw new Error(`Multiple errors found\n\n${indent(errorMessages.join('\n\n'), 7)}\n`);
    // throw new AggregateError(errors, 'Multiple errors found');
  }
};

export { allSettledSequence, allSettledSequenceReduce };
