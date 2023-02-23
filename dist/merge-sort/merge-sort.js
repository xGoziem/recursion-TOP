"use strict";
//! Merge Sort algorithm
const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);
    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);
    return merge(sortedLeft, sortedRight);
};
const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            sortedArray.push(leftArray[leftIndex]);
            leftIndex++;
        }
        else {
            sortedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }
    return sortedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
};
console.log(mergeSort([12, 2, 1, 3, 6, 5]));
