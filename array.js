// const stringArr = ['a', 'b', 'c', 'd', 'e',]
// const numArr = [1, 2, 3, 4, 5]
// const boolArr = [true, false]
// const mixed = ["a", 2, true, undefined, null, { a: "a" }, ['b']]

// console.log(mixed)

// Array CRUD
// class MyArray {
//     constructor() {
//         this.length = 0;
//         this.data = {}
//     }
//     push(item) {
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;
//     }

//     get(index) {
//         return this.data[index]
//     }

//     pop() {
//         const lastItem = this.data[this.length - 1]
//         delete this.data[this.length - 1]
//         this.length--
//         return lastItem
//     }

//     shift() {
//         const firstItem = this.data[0]
        // this.length--;
//         for (let i = 0; i < this.length; i++) {
//             this.data[i] = this.data[i + 1]
//         }
//         delete this.data[this.length - 1]
//         this.length--
//         return firstItem
//     }

//     deleteByIndex(index) {
//         const item = this.data[index]
//         for (let i = index; i < this.length - 1; i++) {
//             this.data[i] = this.data[i + 1]
//         }
//         delete this.data[this.length - 1]
//         this.length--
//         return item
//     }
// }

// const myNewArray = new MyArray();
// console.log(myNewArray.push("apple"))
// console.log(myNewArray.push("orange"))
// console.log(myNewArray.push("mango"))
// console.log(myNewArray.pop())
// console.log(myNewArray.shift())
// console.log(myNewArray)
// console.log(myNewArray.deleteByIndex(0))
// console.log(myNewArray)

// class myFunction {
//     constructor() {
//         this.string = ""
//     }

//     push(str) {
//         this.string = str
//     }

//     reverse(str) {

//         let newStr = str.split('')
//         let index = 0
//         for (let i = newStr.length - 1; i >= 0; i--) {
//             newStr[index] = str[i]
//             index++;
//         }
//         return newStr.join('')
//     }
//     palindromes(str) {
//         let newStr = str.split('')
//         let index = 0
//         for (let i = newStr.length - 1; i >= 0; i--) {
//             newStr[index] = str[i]
//             index++;
//         }
//         const reversedStr = newStr.join('')
//         if (reversedStr === str) {
//             return console.log(`${str} is palindromed`)
//         } else {
//             return console.log(`${str} is not palindrome`)
//         }
//     }

    // numberRev(num) {
    //     // const convertToString = num.toString()
//         return parseInt(num.toString().split('').reverse().join(''))
//         // const convertToArr = convertToString.split('')
//         //     let index = 0
//         //     for (let i = convertToArr.length - 1; i >= 0; i--) {
//         //         convertToArr[index] = convertToString[i]
//         //         index++;
//         //     }
//         //     return convertToArr.join('')
//     }

//     capitalize(str) {
//         return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
//         //     let splitStr = str.split(' ')
//         //     let result = []
//         //     splitStr.map((word) => {
//         //         let splitWord = word.split('')
//         //         for (let i = 0; i < splitWord.length; i++) {
//         //             if (i === 0) {
//         //                 splitWord[0] = splitWord[0].toUpperCase()
//         //             } else {
//         //                 splitWord[i] = splitWord[i]
//         //             }
//         //         }
//         //         result.push(splitWord.join(''))
//         //     })
//         //     return result.join(' ');
//     }

//     fizzBuzz(n) {
//         for (let i = 1; i < n; i++) {
//             if (i % 3 === 0 && i % 5 === 0) {
//                 console.log(`${i} is FizzBuzz`)
//             } else if (i % 5 === 0) {
//                 console.log(`${i} is Buzz`)
//             } else if (i % 3 === 0) {
//                 console.log(`${i} is Fizz`)
//             } else {
//                 console.log(`${i} is nothing`)
//             }
//         }
//     }
// }

// const myNewFunction = new myFunction()
// // console.log(myNewFunction.push("Hello"))
// // console.log(myNewFunction.reverse('hello'))
// // console.log(myNewFunction.palindromes("abba"))
// console.log(myNewFunction.numberRev(9988756))
// // console.log(myNewFunction.capitalize('Hello world ranbir sign shah'))
// console.log(myNewFunction.fizzBuzz(20))

// #################################
// Array Chunk

// Write a fun that takes an array & a chunk sie as input. The Function should return a new array where the original array is split into chunks of the specified size.

// chunk([1,2,3,4,5,6,7,8],3) --------> [[1,2,3],[4,5,6],[7,9]]
// chunk([1,2,3,4,5,6,7,8], 2) --------> [[1,2],[3,4],[5,6],[7,9]]

// 1. Create an empty array to hold the chunks called 'chunks'
// 2. Set a starting index to keep track of where we are in the original array.
// 3. Loop through the original array as long as the index hasn't reached the end.
// 4. Extract a chunk of the desired size from teh original array.
// 5. Add the extarcted chunk to the 'chunked' array
// 6. Move the index forward by the chunk size to get to the next chunk.
// 7. Return teh final array of chunks

// const chunkedArr = (arr, size) =>{
// let chunked = []
// let index = 0;

// while (index < arr.length) {
//     const chunk = arr.slice(index, index + size) 

//     chunked.push(chunk)

//     index += size;
// }
// return chunked
// }


// console.log(chunkedArr([1,2,3,4,5,6,7,8],4))

// #################################
// Two Sum
// Imagine you have a list of numbers and a target number. Your job is to find two numbers in that list that add up to the target number. You also need to tell which positions (or indexes) those two numbers are at in the list.

// Example
// If the list is [3,7,11,15] and the target is 9, then the answer would be [0,1] because 2 (at index 0) plus 7 (at index 1) equals 9.

// const towSum = (arr, target) => {
//     // let result = []
//     for (let i = 0; i < arr.length; i++) {
//       for(let j = 1; j < arr.length; j++) {
//         if(arr[i]+ arr[j] === target) {
//             return [i,j]
//         }
//       }
//     }
//     return []
// }

// Improved version fo Two sum
// const twoSum = (arr, target) => {
//   let numMap = new Map();

//   for(let i = 0; i < arr.length; i++) {
//     let complement = target - arr[i];

//     if(numMap.has(complement)) {
//       return [numMap.get(complement), i] // Return indices of the two numbers
//     } 

//     numMap.set(arr[i], i); // Store value and its index
//   }
//   return []
// }

// console.log(twoSum([5, 2, 7, 11], 16))
// console.log(twoSum([2,2,3, 7, 15, 15, 100, 3, 5, 1], 115));