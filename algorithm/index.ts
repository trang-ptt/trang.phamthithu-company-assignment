function miniMaxSum(arr: number[]): void {
  arr.sort((a, b) => a - b);
  let min = 0,
    max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
    max += arr[arr.length - 1 - i];
  }
  console.log(`${min} ${max}`);
}

function countTotal(arr: number[]): void {
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  console.log(`Total: ${sum}`);
}

function findMin(arr: number[]): void {
  let min = Number.MAX_VALUE;
  arr.forEach((e) => {
    if (e < min) min = e;
  });
  console.log(`Min number: ${min}`);
}

function findMax(arr: number[]): void {
  let max = Number.MIN_VALUE;
  arr.forEach((e) => {
    if (e > max) max = e;
  });
  console.log(`Max number: ${max}`);
}

function findEven(arr: number[]): void {
  const evenArr: number[] = [];
  arr.forEach((e) => {
    if (e % 2 == 0) evenArr.push(e);
  });
  console.log(`Even numbers: ${evenArr}`);
}

function findOdd(arr: number[]): void {
  const oddArr: number[] = [];
  arr.forEach((e) => {
    if (e % 2 != 0) oddArr.push(e);
  });
  console.log(`Odd numbers: ${oddArr}`);
}

const tests = [
  [1, 2, 3, 4, 5], //sorted array
  [5, 3, 1, 2, 4], //unsorted array
  [1, 1, 1, 1, 1], //array with duplicates
  [1000000001, 1000000002, 1000000003, 1000000004, 1000000005], //array with large numbers
  [0, 1, 2, 3, 4], //array includes zero
  [-2, -1, 0, 1, 2], //array includes negative numbers
];

//very large array
const randomLargeArray = Array(1000000).fill(0);
randomLargeArray.forEach((e, index) => {
  randomLargeArray[index] =
    Math.round(Math.random() * 100000) *
    (Math.round(Math.random()) == 0 ? 1 : -1);
});

tests.push(randomLargeArray);

for (let i = 0; i < tests.length; i++) {
  console.log(`Array ${i + 1}: ${tests[i]}`);
  console.log("Output:");
  miniMaxSum(tests[i]);
  countTotal(tests[i]);
  findMin(tests[i]);
  findMax(tests[i]);
  findEven(tests[i]);
  findOdd(tests[i]);
  console.log("-----------------------------");
}
