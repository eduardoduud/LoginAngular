export class ObjectUtils {
  static assign = Object.assign;

  //TODO: investigate if there's a lib that supports deep clone properly
  static clone<T>(element: T): T {
    return JSON.parse(JSON.stringify(element)) as T;
  }

  /**
   * Works only with struct items in array
   * @param arr first array to compare
   * @param other second array to compare
   **/
  static getDifference<T>(arr: T[], other: T[]): T[] {
    return arr.filter((element: T) => {
      return !other.includes(element);
    });
  }

  static areEqual<T>(obj1: T, obj2: T): boolean {
    return JSON.stringify(obj1) == JSON.stringify(obj2);
  }
}
