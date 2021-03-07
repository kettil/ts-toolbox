import { ExtractTypeFromTupleArray } from '../types/extract';
import { ObjectType } from '../types/object';
import objectEntries, { ObjectEntries } from './objectEntries';
import objectFromEntries, { ObjectFromEntries } from './objectFromEntries';

const objectMap = <R extends readonly [number | string, unknown], T extends ObjectType, F = ObjectEntries<T>>(
  object: T,
  callback: (key: ExtractTypeFromTupleArray<F, 0>, value: ExtractTypeFromTupleArray<F, 1>) => R,
): ObjectFromEntries<R[]> => {
  const tuples = objectEntries(object) as ReadonlyArray<
    readonly [ExtractTypeFromTupleArray<F, 0>, ExtractTypeFromTupleArray<F, 1>]
  >;

  return objectFromEntries(tuples.map(([key, value]) => callback(key, value)));
};

export default objectMap;
