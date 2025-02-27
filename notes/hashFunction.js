
// #####################################
// Hash  Functions in Data Structures & Algorithms (DSA) - JavaScript Guide
// --> A Hash function is a function that takes an input (key) and produces a fixed-size output (hash value or hash code). It is widely used in a hash tables, cryptography, and data indexing.

// ** What is a Hash Function?
//  --> A hash function maps data of arbitrary size to a fixed-size value.
// a. It is used to store and retrieve data efficiently.
// b. A good hash function minimizes collisions (when different inputs produce the same output).
// c. The hash value is often used as an index in a hash table.

// ** Example of a Simple Hash Function in JavaScript.

// function simpleHash(key, size) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//         hash += key.charCodeAt(i); // Convery each charcter to ASCII and sum
//     }
//     // well here all the charcter are hashed from key which will be some number which are sumed and stored in hash
//     // and hash is just % by size like if size is 10 than it will just return last number for hash here
//     return hash % size;
// }

// console.log(simpleHash('hello', 10)) // output: Some index (e.g., 2)
// console.log(simpleHash('world', 10)) // output: Some index (e.g., 8)

// d. "hello" & "world" get mapped to different indexes in a table of size 10.

// *** Properties of a Good Hash Function.
// a. Deterministic --> The same input always produces the same output.
// b. Uniform Distribution --> Spreads hash values evenly to avoide clustering.
// c. Efficient --> Should compute the hash value quickly.
// d. Minimal Collisions --> Different inputs should rarely map to the same output.
// e. Fixed Output Size --> The output length remains constant regardless of input size.

// *** Hash Table Implementation in JavaScript.
// --> A hash table (or hash map) is a data structure that maps keys to values using a hash function.

// class hashTable {
//     constructor(size = 7) {
//         this.data = new Array(size); // Create an array of given size
//     }

//     // Hash function using a prime number for better distribution
//     _hash(key) {
//         let hash = 0;
//         const PRIME = 31; // Using a prime number reduces collisions
//         for (let i = 0; i < Math.min(key.length, 100); i++) {
//             hash = (hash * PRIME + key.charCodeAt(i)) % this.data.length;
//         }
//         return hash;
//     }

//     // Insert key-value pair
//     set(key, value) {
//         const index = this._hash(key);
//         if (!this.data[index]) {
//             this.data[index] = [];
//         }
//         this.data[index].push([key, value]); // Handle collisions using chaining
//     }

//     // Retrive value by key
//     get(key) {
//         const index = this._hash(key);
//         if (this.data[index]) {
//             for (let pair of this.data[index]) {
//                 if (pair[0] === key) return pair[1];
//             }
//         }
//         return undefined;
//     }

//     // Retrive all keys in the hash table
//     keys() {
//         let keysArray = [];
//         for (let bucket of this.data) {
//             if (bucket) {
//                 for (let pair of bucket) {
//                     keysArray.push(pair[0])
//                 }
//             }
//         }
//         return keysArray;
//     }

// }

// // Example Usage
// const ht = new hashTable();
// ht.set("name", "Alice")
// ht.set("age", 25);
// ht.set("city", "Kathmandu");

// console.log(ht.get("name"))
// console.log(ht.get("age"))
// console.log(ht.keys())

// ** Explanation
// a. _hash(key) --> Generates an index using a prime number to reduce collisions.
// b. set(key, value) --> Stores key-value pairs using seperate chaining (an array of key-value pairs at each index).
// c. get(key) --> Retrives values efficiently.
// d. keys() --> Returns all stored keys.

// ** Collision Handling Techniques
// --> Since different keys might hash to the same index, we use collision handling.

// 1. Separate Chaining (Linked List in Buckets).
// a. Each index holds a linked list of key-value pairs.
// b. When a collision occurs, the new key-value pair is appended to the list.

// est(key, value) {
//     const index = this._hash(key);
//     if(!this.data[index]) {
//         this.data[index] = [];
//     }

//     this.data[index].push([key, value]); // Append key-value pair in case of collision
// }

// a. Pros: Easy to impplement.
// b. Cons: May require additional memory.

// 2. Open Addressing (Linear Probing)
// a. If a collision occurs, find the next available slot.
// b. Example: If "cat" hashes to index 3, but index 3 is occupied, check 4, then  5, etc.

// set(key, value) {
//     let index = this._hash(key);
//     while (this.data[index] !== undefined) {
//         index = (index + 1) % this.data.length; // Find next available index
//     }
//     this.data[index] = [key, value];
// }

// a. Pros: No extra memory needed.
// b. Cons: Performance can degrade with many collisions.

//  ** Cryptographic Hash Functions
// --> Cryptographic hash functions are one-way functions that produce a unique fixed-size hash.

// ** Common Hashing Algorithms
// Algorithm            Use Case
// MD5         Not secure, mostly deprecated.
// SHA-256       Secure, used in Bitcoin & HTTPS.
// SHA-512          Stronger security, used in cryptography.
// bcrypt          Used for password hashing

// ** Performance Analysis
// 1. Time Complexity:
// a. Insertion, Deletion, Lookyup (Best Case) --> O(1).
// b. Worst Case (If Many Collisions) --> O(n).
// 2. Space Complexity:
// a. O(n) for storing n key-value pairs.


// ** Summary
// features            Descriptoin
// Hash Function      Converts a key to a fixed-size hash value.
// Hash Table         Stores key-value pairs using hashing.
// Collision handling        Uses Separate Chaining or Open Addressing.
// Time Complexity        Best: O(1), Worst: O(n).
// Uses                   Fast Lookups, passwrod security, indexing.