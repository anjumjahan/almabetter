//Sorting -> arranging data in a specific order, either ascending, or descending

//Sorting Algorithm ->>

//Bubble sort - from bottom to top ----->>> v imp
//Bring highest element to end

function bblSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

var arr = [234, 43, 55, 63, 5, 6, 235, 547];
bblSort(arr);

//Time Complexity of bbuble sort ---> O(n 2)
//Space Complexity -->>>if input changes, how will space change O(1)

//Selection Sort ---> we will keep the smallest element at the start
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function selectionSort(arr, n) {
  var i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++) if (arr[j] < arr[min_idx]) min_idx = j;

    // Swap the found minimum element with the first element
    swap(arr, min_idx, i);
  }
}

var arr = [64, 25, 12, 22, 11];
var n = 5;
selectionSort(arr, n);

//Time Complexity - O(n2)
//Space complexity - 1

//Insertion Sort--> we assume that 1st element is sorted or smallest, eg deck of cards

// Javascript program for insertion sort
// time - O(n^2)
// Function to sort an array using insertion sort
function insertionSort(arr, n) {
  let i, j, key; //declaring before using is good practice

  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
  console.log(arr);
}

arr = [4, 2, 1, 9, 0, 10];
n = arr.length;
insertionSort(arr, n);

//Merge Sort ------> >>>> VVVVVV IMP
// Merge Sort -> it uses the divide and conquer technique
//Left is starting index, right is ending index
function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  } //base case
  let middle = parseInt(left + right) / 2;
  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);
  merge(arr, left, middle, right);
}

function merge(arr, left, middle, right) {
  let n1 = mid - left + 1; //length of left sub array
  let n2 = right - mid; // length of right sub array

  let L = new Array(n1); // left to mid
  let R = new Array(n2); // mid+1 to right

  //copy data
  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }

  for (let j = 0; j < n2; j++) {
    R[j] = arr[middle + 1 + j];
  }

  let i = 0,
    j = 0,
    k = 0;

  while (i < n1 && j < n2) {
    if (L[i] < [R[j]]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  //Copy the remaining elements of L[]
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[i];
    j++;
    k++;
  }
}

// Merge sort --> O(nlogn)
// Stability -> if both elements are same they shouldnt interchange --> the code should be in such a way
