/* 
AGENDA
-------
1. Searching Algo
    a. Linear Search
    b. Binary Search

2. Sorting Algo [Merge Sort and insertion sort complexity]
    a. Quick Sort ---------->>>>>>>>>>. VVVVVVV IMP
    b. Counting Sort
    c. Radix sort
*/

const { partition, countBy } = require("lodash");

// Linear Search - > searching one by one

// function LinearSearch(value, arr) {
//   let index = 0;
//   let found = false;
//   while (index < arr.length) {
//     if (arr[index] === value) {
//       found = true;
//       //   console.log("Found at", index);
//       break;
//     } else {
//       index++;
//     }
//   }
//   return found;
// }

// arr = [5, 2, 3, 8, 9, 0];
// let flag = LinearSearch(0, arr);
// if (flag === true) {
//   console.log("Element is found");
// } else {
//   console.log("Element is not found");
// }

// Another way
function LinearSearch(value, arr) {
  let index = 0;
  let position = -1;
  //for(index = 0; index < arr.length; index++)
  while (index < arr.length) {
    if (arr[index] === value) {
      position = index;
      break;
    } else {
      index++;
    }
  }
  return position;
}

arr = [5, 2, 3, 8, 9, 0];
let posi = LinearSearch(10, arr);
if (posi >= 0) {
  console.log("Found at", posi);
} else {
  console.log("Did not find it");
}

// Time complexity of Linear search--> o(n)

// Binary Search --> it can be used only when the array is sorted
// binary search is faster ---> O(log n)
function binarySearch(arr, val, start, end) {
  //base condition
  if (start > end) {
    return;
  }
  let mid = Math.floor((start + end) / 2);

  //compare the middle element with val
  if (arr[mid] === val) {
    return mid;
  }

  //if element at mid is greater than val
  if (arr[mid] > val) {
    return binarySearch(arr, val, start, mid - 1);
  }

  //if element is smaller than val
  else {
    return binarySearch(arguments, val, mid + 1, end);
  }
}
let arr = [1, 3, 5, 7, 8, 9];
let x = 9;
console.log(binarySearch(arr, x, 0, arr.length - 1));

// Quick Sort
//choose one element [this element is called pivot]
// put that element in its correct position
//count the no of elements samller than pivot
//put pvot element at start + count
// put all elements smaller than pivot in left and larger in right
function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let p = partition(arr, start, end);
  //p i sthe correct index of the pivot element
  quickSort(arr, start, p - 1);
  quickSort(arr, p + 1, end);
}

function partition(arr, start, end) {
  let pivot = arr[0];
  let count = 0;
  //count the no of elements smaller than the pivot

  //a.
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      count++;
    }
  }

  //b. swapping
  let pivotIndex = start + count;
  let t = arr[pivotIndex];
  arr[pivotIndex] = arr[start];
  arr[start] = t;

  //c.elements smaller on left are larger on right of pivot
  let i = start,
    j = end;
  while (i < pivotIndex && j > pivotIndex) {
    while (arr[i] <= pivot) {
      i++;
    }
    while (arr[j] >= pivot) {
      j--;
    }
    if (i < pivotIndex && j > pivotIndex) {
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
  }
  return pivotIndex;
}
arr = [5, 1, 3, 4, 2, 6];
quickSort(arr, 0, 5);
console.log(arr);

//Counting sort -->non comparision based algo
//range - highest num in the list
//create an array of size range
//space gets wasted - one drawback

//Radix sort (Bucket sort)--> stable sorting alogorithm, sorted based on units(last number), then based on tens, hundresds
//to find max element
function getMax(arr1, n) {
  let max = arr1[0]; // assuming first element is max
  for (i = 1; i < n; i++) {
    if (arr1[i] > max) {
      max = arr1[i];
    }
  }
  return max;
}

function countSort(arr1, n, exp) {
  //create an o/p of size same as i/p
  let output = new Array(n);

  let count = new Array(10);
  for (let i = 0; i < 10; i++) {
    count[i] = 0;
  }

  //store the count
  for (let i = 0; i < n; i++) {
    count[(arr1[i] / exp) % 10]++;
  }
}

function radixSort(arr1, n) {
  const max = getMax(arr1, n);

  for (let exp = 1; Math.floor(max / exp) > 0; exp = exp * 10) {
    countSort(arr1, n, exp);
  }
}
let arr1 = [5, 2, 1, 90, 32];
let n = arr1.length;

radixSort(arr1, n);
console.log(arr1);
