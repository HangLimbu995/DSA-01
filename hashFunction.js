// class HashTable {
//     constructor(size = 5) {
//         this.keyMap = new Array(size); // Creating a array of with size 7
//     }

//     _hashFunction(key) {
//         let sum = 0;
//         const PRIME_NUMBER = 31

//         for (let i = 0; i < Math.min(key.length, 100); i++) {
//             const charCode = key.charCodeAt(i) - 96;
//             sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length
//         }
//         return sum;
//     }

//     set(key, value) {
//         const index = this._hashFunction(key)

//         if (!this.keyMap[index]) this.keyMap[index] = [];
//         this.keyMap[index].push([key, value])
//         return this;
//     }

//     get(key) {
//         const index = this._hashFunction(key);

//         if (this.keyMap[index]) {
//             for (let pair of this.keyMap[index]) {
//                 if (pair[0] === key) return pair[1];
//             }

//         }

//         return undefined;
//     }

//     getAllKeys() {
//         let keys = [];

//         for (let i = 0; i < this.keyMap.length; i++) {
//             if (this.keyMap[i]) {
//                 for (let j = 0; j < this.keyMap[i].length; j++) {
//                     keys.push(this.keyMap[i][j][0])
//                 }
//             }
//         }
//         return keys;
//     }

//     getAllValues() {
//         let values = [];

//         for (let data of this.keyMap) {
//             if (data) {
//                 for (let value of data) {
//                     values.push(value[1])
//                 }
//             }
//         }
//         return values;
//     }
// }

// const phoneBook = new HashTable();
// phoneBook.set('name', 'hang')
// // phoneBook.set('name', 'limbu')
// phoneBook.set('age', 23)
// phoneBook.set('add', 'ktm')
// console.log(phoneBook.get('name'))
// console.log(phoneBook.get('age'))
// console.log(phoneBook.getAllKeys())
// console.log(phoneBook.getAllValues())

// console.log(phoneBook)


// const text = "Hello my name name name is huxn"
// const text = "achha achha achha xa sachha"

// function textCount(text) {
//     const splitText = text.toLowerCase().split(" ")

//     let countText = {}
//     // console.log('split text',!countText.splitText[0])
//     for (let text of splitText) {
//         if (text in countText) {
//             countText[text]++
//         } else {
//             countText[text] = 1
//         }

//     }
//     return countText
// }

// const textcount = new textCount(text)
// console.log(textcount)

function twoSum(nums, target) {
    // const map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     const complement = target - nums[i]
    //     if (map.has(complement)) {
    //         return [map.get(complement), i]
    //     }
    //     map.set(nums[i], i)
    // }
    // return []
    // ############# Above one is better #########

    // let numMap = {}

    // for(let i = 0; i < nums.length; i++) {
    //     let complement = target - nums[i]

    //     if(complement in numMap ) {
    //         return [numMap[complement], i];
    //     }
    //     numMap[nums[i]] = i;
    // }
    // return []
}

// const nums = [2, 7, 11, 15]
// const target = 9

// const result = new twoSum(nums, target)
// console.log(result)