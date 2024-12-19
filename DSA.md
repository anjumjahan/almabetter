Introduction to DSA - V V Imp

1. DSA - Data Structure Algorithm

Algorithm -- set of instructions -- used to solve a problem (written in plain english)

Example of maggie for algorithm

1. Switch on the flame
2. Take utensil and add water
3. Add the maggie bar
4. Add the tastemaker

Qualities of a good algo-->

1. input and output should be precisely defined
2. each step should be clear
3. Algorithm should be the most efficient way to solve the problem
4. It should not contain any computer code

Problem statement - there are two numbers, retrun the larger number

1. Start
2. Declare Variables a, b
3. take input from the declared variables
4. If a>b, got to step 4, or go to step 5
5. Print a is larger
6. else, print b is larger

Datastructures

Data -> anything that our program works on is data
sturcture is nothing but a framework

DS - It is a way of storing data and it is used to store and organize data

let name1 ="Anjum" // this way would take too much time to store 100 names
let name2 ="Jahan"

name = [];
for(i=0;i<100;i++){
name[i] = prompt("")
} --> this is DS

DS Types

1. Linear -->>>> in sequence
2. Non Linear -->>> not in sequence

Linear Example

1. Array
2. Stack -- LIFO
3. Queue -- FIFO
4. Linked List --> LIke a train bogie

Non Linear Example

1. Trees
2. Graphs

Asymptotic Analysis
Scalability -> if your input is increasing how efficiently your program will work
Example : find sum of 1 to 10
sum = 0;
for(i=0;i<=10;i++){
sum = sum+i;
}
console.log(sum) // this will give us the output quickly

but if i try finding sum of a larger number

sum = 0;
for(i=0;i<=100000000000;i++){
sum = sum+i;
}
console.log(sum) // this will take more time

instead if we do
n = 10000000000000
sum = n(n+1)/2
console.log(sum) // this could give the output faster as only 1 operation to be performed

asymptotic analysis will help us compare 2 algorithm to
asymptotic notations

1. Big O --> O -> Max time (Worst case complexity)
2. Omega --> min((best case complexity))
3. Theta --> average

//Divide and Conquer
Merge Sort
Qucik sort
binary search
