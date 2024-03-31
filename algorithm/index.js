"use strict";
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    let min = 0, max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        min += arr[i];
        max += arr[arr.length - 1 - i];
    }
    console.log(`${min} ${max}`);
}
function countTotal(arr) {
    let sum = 0;
    for (const i of arr) {
        sum += i;
    }
    console.log(`Total: ${sum}`);
}
function findMin(arr) {
    let min = Number.MAX_VALUE;
    arr.forEach((e) => {
        if (e < min)
            min = e;
    });
    console.log(`Min number: ${min}`);
}
function findMax(arr) {
    let max = Number.MIN_VALUE;
    arr.forEach((e) => {
        if (e > max)
            max = e;
    });
    console.log(`Max number: ${max}`);
}
function findEven(arr) {
    const evenArr = [];
    arr.forEach((e) => {
        if (e % 2 == 0)
            evenArr.push(e);
    });
    console.log(`Even numbers: ${evenArr}`);
}
function findOdd(arr) {
    const oddArr = [];
    arr.forEach((e) => {
        if (e % 2 != 0)
            oddArr.push(e);
    });
    console.log(`Odd numbers: ${oddArr}`);
}
//sorted array
let test1 = [1, 2, 3, 4, 5];
console.log(`Array 1: ${test1}`);
console.log("Output:");
miniMaxSum(test1);
countTotal(test1);
findMin(test1);
findMax(test1);
findEven(test1);
findOdd(test1);
console.log("-----------------------------");
//unsorted array
let test2 = [5, 3, 1, 2, 4];
console.log(`Array 2: ${test2}`);
console.log("Output:");
miniMaxSum(test2);
countTotal(test2);
findMin(test2);
findMax(test2);
findEven(test2);
findOdd(test2);
console.log("-----------------------------");
//array with duplicates
let test3 = [1, 1, 1, 1, 1];
console.log(`Array 3: ${test3}`);
console.log("Output:");
miniMaxSum(test3);
countTotal(test3);
findMin(test3);
findMax(test3);
findEven(test3);
findOdd(test3);
console.log("-----------------------------");
//array with large numbers
let test4 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(`Array 4: ${test4}`);
console.log("Output:");
miniMaxSum(test4);
countTotal(test4);
findMin(test4);
findMax(test4);
findEven(test4);
findOdd(test4);
console.log("-----------------------------");
//array includes zero
let test5 = [0, 1, 2, 3, 4];
console.log(`Array 5: ${test5}`);
console.log("Output:");
miniMaxSum(test5);
countTotal(test5);
findMin(test5);
findMax(test5);
findEven(test5);
findOdd(test5);
console.log("-----------------------------");
//array includes negative numbers
let test6 = [-2, -1, 0, 1, 2];
console.log(`Array 6: ${test6}`);
console.log("Output:");
miniMaxSum(test6);
countTotal(test6);
findMin(test6);
findMax(test6);
findEven(test6);
findOdd(test6);
console.log("-----------------------------");
