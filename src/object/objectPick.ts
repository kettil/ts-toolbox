import { ObjectType } from '../types/object';

const objectPick = <T extends ObjectType = ObjectType, P extends keyof T = keyof T>(
  data: T,
  keys: P[],
): { [K in P]: T[K] } =>
  Object.fromEntries(Object.entries(data).filter(([key]) => keys.includes(key as P))) as { [K in P]: T[K] };

export default objectPick;
