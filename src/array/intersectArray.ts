const intersectArray = <T>(array1: T[], array2: T[]): T[] => array1.filter((key) => array2.includes(key));

export default intersectArray;
