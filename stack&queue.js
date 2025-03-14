
// // STACK implementation in JAVASCRIPT

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor(value) {
//         let newNode = new Node(value);
//         this.first = newNode;
//         this.last = newNode;
//         this.length = 1;
//     }

//     push(value) {
//         let newNode = new Node(value);
//         if (this.length === 0) {
//             this.first = newNode;
//             this.last = newNode;
//             this.length = 1;
//         }

//         newNode.next = this.first;
//         this.first = newNode;
//         this.length++;
//     }

//     pop() {
//         let removedElem = this.first;
//         this.first = this.first.next;
//         this.length--;
//         return removedElem;
//     }

//     min() {
//         if (this.length === 0) return undefined;

//         let temp = this.first;
//         let minValue;
//         let value = this.first.value;

//         for (let i = 0; i < this.length; i++) {
//             let tempValue = temp.value;
//             minValue = Math.min(tempValue, value);
//             value = minValue
//             temp = temp.next;
//         }
//         return minValue
//     }
// }

// let stack = new Stack(10);
// stack.push(13)
// stack.push(2)
// stack.push(12)
// stack.push(11)
// // console.log('pop', stack.pop())
// console.log('min value is', stack.min())
// console.log(stack)

// QUEUE implementation in JAVASCRIPT

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor(value) {
//         let newNode = new Node(value);
//         this.first = newNode;
//         this.last = newNode;
//         this.length = 1;
//     }

//     enqueue(value) {
//         let newNode = new Node(value);
//         if (this.length === 0) {
//             this.first = newNode;
//             this.last = newNode;
//         }

//         this.last.next = newNode;
//         this.last = newNode;
//         this.length++;
//         return this;
//     }

//     dequeue() {

//         if (this.length === 0) return undefined;

//         let temp = this.first;

//         if (this.length === 1) {
//             this.first = null;
//             this.last = null;
//         };
//         this.first = this.first.next
//         temp.next = null;
//         this.length--;
//         return temp;
//     }

//     front() {
//         return this.first;
//     }

//     isEmpty() {
//         return this.length === 0;
//     }

//     size() {
//         return this.length;
//     }
// }

// const queue = new Queue(0)
// queue.enqueue(1)
// queue.enqueue(2)
// console.log('dequeu', queue.dequeue())
// console.log(queue.front())
// console.log(queue.isEmpty())
// console.log(queue.size())
// console.log(queue)

// const isValidParenthesis = (str) => {
//     const stack = []

//     const brackets = {
//         "{": "}",
//         "[": "]",
//         "(": ")",
//     }

//     for (let char of str) {
//         console.log('char is', char)
//         if (brackets[char]) {
//             stack.push(char)
//             console.log('stack is', stack)
//         } else {
//             const top = stack.pop()

//             if (!top || brackets[top] !== char) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0
// }

// const isValidParenthesis = str => {
//     let stack = [];

//     const brackets = {
//         "(": ")",
//         "{": "}",
//         "[": "]",
//     }

//     for (let char of str) {
//         if (brackets[char]) {
//             stack.push(char)
//         } else {
//             const top = stack.pop()

//             if (!top || brackets[top] !== char) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }

// console.log(isValidParenthesis("(){}[]")) // true
// console.log(isValidParenthesis("([])]")) // false
// console.log(isValidParenthesis("()")) // true
// console.log(isValidParenthesis("(")) // false

// function reverseWord(word) {
//     return word.split("").reverse().join("");
// }
// //  console.log(reverseWord("hello")) // olleh

// function reverseString(str) {
//     let reversedString = []
//     let reversedStr = str.split(' ')
//     for (let str of reversedStr) {
//         const reversedWord = reverseWord(str)
//         reversedString.push(reversedWord)

//     }
//     return reversedString.reverse().join(' ')
// }

// from HuXn
// function reverseString(str) {
//     const stack = [];

//     for (let char of str) {
//         stack.push(char);
//     }

//     let reversedStr = "";

//     while (stack.length > 0) {
//         reversedStr += stack.pop();
//     }

//     return reversedStr;
// }


// From ChatGpt
// function reverseString(str) {
//     let arr = str.split(''); // Convert string to an array of characters (strings are immutable in JS).
//     let left = 0;
//     let right = arr.length - 1;

//     // Swap characters at left and right until the pointers meet in the middle
//     while (left < right) {
//         // Swap characters
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;

//         left++;
//         right--;
//     }

//     return arr.join(''); // Join array back into a string;
// }

// const reversedString = reverseString("hello world hang")
// console.log(reversedString); // output: "dlrow olleh"