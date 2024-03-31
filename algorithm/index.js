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
//sorted array
let test1 = [1, 2, 3, 4, 5];
console.log(`Array 1: ${test1}`);
console.log("Output:");
miniMaxSum(test1);
console.log("-----------------------------");
//unsorted array
let test2 = [5, 3, 1, 2, 4];
console.log(`Array 2: ${test2}`);
console.log("Output:");
miniMaxSum(test2);
console.log("-----------------------------");
//array with duplicates
let test3 = [1, 1, 1, 1, 1];
console.log(`Array 3: ${test3}`);
console.log("Output:");
miniMaxSum(test3);
console.log("-----------------------------");
//array with large numbers
let test4 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(`Array 4: ${test4}`);
console.log("Output:");
miniMaxSum(test4);
console.log("-----------------------------");
//array includes zero
let test5 = [0, 1, 2, 3, 4];
console.log(`Array 5: ${test5}`);
console.log("Output:");
miniMaxSum(test5);
console.log("-----------------------------");
//array includes negative numbers
let test6 = [-2, -1, 0, 1, 2];
console.log(`Array 6: ${test6}`);
console.log("Output:");
miniMaxSum(test6);
console.log("-----------------------------");
