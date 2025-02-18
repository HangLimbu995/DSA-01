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