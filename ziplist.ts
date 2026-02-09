function zipList<A, B>(listA: A[], listB: B[]): (A | B)[] {
  const newList: (A | B)[] = [];
  for (let i = 0; i < listA.length || i < listB.length; i++) {
    newList.push(listA[i]);
    newList.push(listB[i]);
  }
  return newList;
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c'])); // [1, 'a', 2, 'b', 3, 'c'];

const zipListTheFunctionalWay = <T, U>(
  list1: T[],
  list2: U[],
): Array<T | U> => list1.reduce<Array<T | U>>(
    (result, _, i) => result.concat(list1[i], list2[i]),
    [],
  );

console.log(zipListTheFunctionalWay([1, 2, 3], ['a', 'b', 'c'])); // [1, 'a', 2, 'b', 3, 'c'];
