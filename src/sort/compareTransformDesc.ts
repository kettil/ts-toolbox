import compareAsc from './compareAsc';
import { SortTransform } from './types';

const compareTransformDesc = <T>(callback: SortTransform<T>) => (a: T, b: T) => compareAsc(callback(b), callback(a));

export default compareTransformDesc;
