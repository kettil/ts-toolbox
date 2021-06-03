import { allSettledSequence, allSettledSequenceReduce } from '../../../src/promise/allSettledSequence';

describe('allSettledSequenceReduce()', () => {
  test('it should work', async () => {
    await expect(allSettledSequenceReduce(Promise.resolve([]), () => Promise.resolve())).resolves.toEqual([]);
  });

  test('it should throw a error', async () => {
    await expect(
      allSettledSequenceReduce(Promise.resolve([]), () => Promise.reject(new Error('faulty task'))),
    ).resolves.toEqual([new Error('faulty task')]);
  });

  test('it should throw a object', async () => {
    await expect(
      allSettledSequenceReduce(Promise.resolve([]), () =>
        /* eslint-disable-next-line prefer-promise-reject-errors */
        Promise.reject({ notErrorObject: 'faulty task' }),
      ),
    ).resolves.toEqual([new Error('unknown error: {\n         "notErrorObject": "faulty task"\n       }')]);
  });

  test('it should work with existing errors', async () => {
    const error1 = new Error('error1');
    const error2 = new Error('error2');

    await expect(allSettledSequenceReduce(Promise.resolve([error1, error2]), () => Promise.resolve())).resolves.toEqual(
      [error1, error2],
    );
  });

  test('it should throw a error with existing errors', async () => {
    const error1 = new Error('error1');
    const error2 = new Error('error2');

    await expect(
      allSettledSequenceReduce(Promise.resolve([error1, error2]), () => Promise.reject(new Error('faulty task'))),
    ).resolves.toEqual([error1, error2, new Error('faulty task')]);
  });
});

describe('allSettledSequence()', () => {
  test('it should work with empty array', async () => {
    await expect(allSettledSequence([])).resolves.toBeUndefined();
  });

  test('it should work with three tasks', async () => {
    const task = jest.fn(() => Promise.resolve());

    await expect(allSettledSequence([() => task(), () => task(), () => task()])).resolves.toBeUndefined();

    expect(task).toHaveBeenCalledTimes(3);
  });

  test('it should throw a error', async () => {
    const task = jest.fn(() => Promise.resolve());
    const error = jest.fn(() => Promise.reject(new Error('faulty task')));

    await expect(allSettledSequence([() => task(), () => error(), () => task()])).rejects.toBeInstanceOf(Error);

    expect(task).toHaveBeenCalledTimes(2);
    expect(error).toHaveBeenCalledTimes(1);
  });
});
