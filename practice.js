// // Array CRUD
// // create myArray
// class MyArray {
//     // constructor assign this.length = 0; this.data = {}
//     constructor() {
//         this.data = {}
//         this.length = 0;
//     }
//     // do push, push new item to the last
//     push(value) {
//         this.data[this.length] = value;
//         this.length++;
//         return this;
//     }

//     // do get, get the item by index given
//     get(index) {
//         return this.data[index - 1];
//     }

//     // pop, remove last item from the array
//     pop() {
//         // const lastItem = this.data[this.length - 1];
//         delete this.data[this.length - 1];
//         this.length--;
//         return this;
//     }

//     // shift, remove first item from the array
//     shift() {
//         for (let i = 0; i < this.length; i++) {
//             this.data[i] = this.data[i + 1];
//         }
//         delete this.data[this.length - 1];
//         this.length--;
//         return this;
//     }
//     // deleteByIndex, remove item by index given in array
//     deleteByIndex(index) {
//         if (index === 0) {
//             return this.shift();
//         }

//         if (index === this.length - 1) {
//             return this.pop()
//         }

//         for (let i = index; i < this.length; i++) {
//             console.log('checked')
//             this.data[i] = this.data[i + 1]
//         }
//         delete this.data[this.length - 1]
//         this.length--;
//         return this
//     }

// }

// const newMyArray = new MyArray()

// console.log(newMyArray.push('apple'))
// console.log(newMyArray.push('mango'))
// console.log(newMyArray.push('orange'))
// // console.log(newMyArray.get(1))
// // console.log(newMyArray.pop(1))
// // console.log(newMyArray.shift(1))
// // console.log('delete by index', newMyArray.deleteByIndex(0))

// create a myFunction class

// and construct this.string = ''
// push str in the this.string

// class myFunction {
//     constructor() {
//         this.string = ""
//     }

//     push(str) {
//         this.string = str
//         return this
//     }

//     // reverse string
//     reverse(str) {

//         return str.split('').reverse().join('')
//     }

//     palindromes(str) {
//         const reversedStr = this.reverse(str)

//         if (reversedStr === str) {
//             return true
//         }
//         return false
//     }

//     reverseNumber(num) {
//         return parseInt(num.toString().split('').reverse().join(''))

//     }

//     capitalize(str) {
//         // str = "hello world"
//         // return "Hello World"
//         return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
//     }

//     fizzbuz(n) {
//         // if divisible by 3 & 5 return fizzbuzz
//         // if divisible by 3 only return fizz
//         // if divisible by 5 only return buzz
//         return n % 3 === 0 && n % 5 === 0
//             ? "FizzBuzz"
//             : n % 3 === 0
//                 ? "Fizz"
//                 : n % 5 === 0
//                     ? "Buzz"
//                     : "nothing"
//     }
// }

// const myNewFunction = new myFunction();
// console.log(myNewFunction.push("apple"))
// console.log(myNewFunction.reverse('onam'))
// console.log(myNewFunction.palindromes("omo"))
// console.log(myNewFunction.reverseNumber(123456))
// console.log(myNewFunction.capitalize('hello world sewaro'))
// console.log(myNewFunction.fizzbuz(27))


// ###########################
// Array Chunck

// Write a fun that takes an array & a chunk size as input. The Function should return a new array where original array is split into chunks of the specified size.

// chunk([1,2,3,4,5,6,7,8,9], 3) ----> [[1,2,3],[4,5,6],[7,8,9]]
// chunk([1,2,3,4,5,6,7,8,9], 2) ----> [[1,2],[3,4],[5,6],[7,8],[9]]

// 1. Create an empty array to hold the chunks called 'chunks'
// 2. Set a starting index to keep track of where we are in the original array.
// 3. Loop through the original array as  long as the index hasn't reached the end.
// 4. Extract a chunk of the desired size from the original array.
// 5. Add the extracted chunk to the 'chunked' array
// 6. Move the index forward by the chunk size to get to the next chunk.
// 7. Return the final array of chunks

// const chunkedArr = (arr, size) => {
//     let chunks = [];
//     let index = 0;

//     while (index < arr.length) {
//         const chunk = arr.slice(index, index + size)
//         chunks.push(chunk);
//         index += size;
//     }

//     return chunks;
// }

// console.log(chunkedArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))


// const twosum = (arr, target) => {
//     let numMap = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         let complement = target - arr[i]
//         if (numMap.has(complement)) {
//             return [numMap.get(complement), i]
//         }
//         numMap.set(arr[i], i)
//     }
//     return []
// }

// console.log(twosum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))

// ##################################
//  MaxProfit

// array of prices = [5,2,3,7,9] earnings every day
// get the max profit from this array
// first lets do minProfit = prices[0]
// maxProfit  = 0

// now loop thorough prices
// get current prices
// update minprice with mathmin
// get potential price which is current price  - minprice -- this is potential earnings

// update max prifit with math max among maxprice and potential price

// returh maxProfit

// const maxProfit = prices => {
//     let minProfit = prices[0]
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         const currentPrice = prices[i] // 7,4,2,6,4

//         minProfit = Math.min(minProfit, currentPrice);// 7,4,2,2,2

//         const potentialPrice = currentPrice - minProfit; // 0,0,0,4,0

//         maxProfit = Math.max(maxProfit, potentialPrice) // 0,0,0,4,4
//         console.log('maxProfit', maxProfit)

//     }
//     return maxProfit;
// }

// const prices = [7, 4, 2, 6, 4]
// const profit = maxProfit(prices)
// console.log("Maximum profit:", profit)

// #####################################
// INDEX.JS
// const studentsDatabase = ['jordan', 'erick', 'jhon', 'michal']

// // find students with give name from this data
// const findStudent = (allStudents, studentName) => {
//     return allStudents.map(student => {
//         student === studentName ? console.log(`Found ${studentName}`) : null
//     })
// }
// findStudent(studentsDatabase, 'michal')

// // merge sort of studnets
// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;

//     const mid = Math.floor(arr.length / 2)
//     const left = mergeSort(arr.slice(0, mid))
//     const right = mergeSort(arr.slice(mid))

//     return (left, right)
// }

// const newMergSort = new mergeSort()
// console.log(mergeSort(1, 2, 5, 3, 6, 2, 7))

// ################################3
// linkList.js

// This is "SINGLY LINKED LIST" implementation in JAVASCRIPT

// class Node {
//     constructor(value) {
//         this.head = value;
//         this.next = null;
//     }
// }

// class linkedList {
//     constructor(value) {
//         this.head = new Node(value);
//         this.tail = this.head;
//         this.length = 1;
//     }

//     push(value) {
//         let newNode = new Node(value);

//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         }

//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//     }

//     pop() {
//         if (!this.head) {
//             return null
//         }

//         let prev = this.head
//         let temp = this.head;

//         while (temp.next) {
//             prev = temp;
//             temp = prev.next;
//         }

//         this.tail = prev;
//         this.tail.next = null;
//         this.length--;

//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return temp;
//     }

//     unshift(value) {
//         let newNode = new Node(value);

//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         }

//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;

//         return this;
//     }

//     shift() {
//         if (!this.head) {
//             return null;
//         }

//         let temp = this.head;
//         this.head = this.head.next;
//         this.length--;

//         return this;
//     }

//     getfirst() {
//         if (!this.head) {
//             return null;
//         }
//         return this.head;
//     }

//     getlast() {
//         if (!this.head) {
//             return null;
//         }

//         let temp = this.head;

//         while (temp) {
//             if (!temp.next) {
//                 return temp;
//             }
//             temp = temp.next;
//         }
//     }

//     get(index) {
//         if (!this.head) {
//             return null;
//         }

//         let temp = this.head;
//         let counter = 0;

//         while (temp) {
//             if (counter === index) {
//                 return temp;
//             }
//             temp = temp.next;
//             counter++;
//         }
//     }

//     set(index, value) {

//         let newNode = new Node(value)

//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         }

//         let temp = this.get(index)

//         if (temp) {
//             temp.value = value
//             return true;
//         }

//         return false;
//     }

//     insert(index, value) {
//         if (index === 0) {
//             return this.unshift(value)
//         }

//         if (index === this.length) {
//             return this.push(value)
//         }

//         let newNode = new Node(value)

//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         }

//         let temp = this.get(index - 1);

//         newNode.next = temp.next;
//         temp.next = newNode;
//         this.length++;
//         return true;
//     }

//     size() {
//         if (!this.head) return null;

//         return this.length;
//     }

//     clear() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//         return this;
//     }
// }

// const newLinkedList = new linkedList(1)
// newLinkedList.push(2)
// newLinkedList.push(5)
// // newLinkedList.pop()
// newLinkedList.unshift(12)
// // newLinkedList.shift()
// console.log('frist', newLinkedList.getfirst())
// console.log('last', newLinkedList.getlast())
// console.log('get index', newLinkedList.get(2))
// console.log('set index', newLinkedList.set(1, 10))
// console.log('insert', newLinkedList.insert(0, 10))
// console.log('size', newLinkedList.size())
// console.log('clear', newLinkedList.clear())
// console.log(newLinkedList)