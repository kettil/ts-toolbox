import { allSettledSequence, allSettledSequenceReduce } from '../../../src/promise/allSettledSequence';

describe('allSettledSequenceReduce()', () => {
  test('it should work', async () => {
    const promise = allSettledSequenceReduce(Promise.resolve([]), async () => {});

    await expect(promise).resolves.toEqual([]);
  });

  test('it should throw a error', async () => {
    const promise = allSettledSequenceReduce(Promise.resolve([]), () => {
      throw new Error('faulty task');
    });

    await expect(promise).resolves.toEqual([new Error('faulty task')]);
  });

  test('it should throw a object', async () => {
    const error = new Error('error42');

    const promise = allSettledSequenceReduce(Promise.resolve([]), () => {
      throw error;
    });

    await expect(promise).resolves.toEqual([error]);
  });

  test('it should work with existing errors', async () => {
    const error1 = new Error('error1');
    const error2 = new Error('error2');

    await expect(allSettledSequenceReduce(Promise.resolve([error1, error2]), async () => {})).resolves.toEqual([
      error1,
      error2,
    ]);
  });

  test('it should throw a error with existing errors', async () => {
    const error1 = new Error('error1');
    const error2 = new Error('error2');

    const promise = allSettledSequenceReduce(Promise.resolve([error1, error2]), () => {
      throw new Error('faulty task');
    });

    await expect(promise).resolves.toEqual([error1, error2, new Error('faulty task')]);
  });
});

describe('allSettledSequence()', () => {
  test('it should work with empty array', async () => {
    const promise = allSettledSequence([]);

    await expect(promise).resolves.toBeUndefined();
  });

  test('it should work with three tasks', async () => {
    const task = jest.fn(async () => {});

    const promise = allSettledSequence([async () => task(), async () => task(), async () => task()]);

    await expect(promise).resolves.toBeUndefined();

    expect(task).toHaveBeenCalledTimes(3);
  });

  test('it should throw a error', async () => {
    const task = jest.fn(async () => {});
    const error = jest.fn(() => {
      throw new Error('faulty task');
    });

    const promise = allSettledSequence([async () => task(), () => error(), async () => task()]);

    await expect(promise).rejects.toBeInstanceOf(Error);

    expect(task).toHaveBeenCalledTimes(2);
    expect(error).toHaveBeenCalledTimes(1);
  });
});
