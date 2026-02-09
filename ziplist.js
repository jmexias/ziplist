"use strict";
function zipList(listA, listB) {
    const newList = [];
    for (let i = 0; i < listA.length || i < listB.length; i++) {
        newList.push(listA[i]);
        newList.push(listB[i]);
    }
    return newList;
}
console.log(zipList([1, 2, 3], ['a', 'b', 'c'])); // [1, 'a', 2, 'b', 3, 'c'];
const zipListTheFunctionalWay = (list1, list2) => list1.reduce((result, _, i) => result.concat(list1[i], list2[i]), []);
console.log(zipListTheFunctionalWay([1, 2, 3], ['a', 'b', 'c'])); // [1, 'a', 2, 'b', 3, 'c'];
