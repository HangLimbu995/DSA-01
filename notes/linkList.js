// Linked List in JavaScript (For Beginners)
// A linked list is a data structure where elements (called nodes) are linked together using pointers. Unlike arrays, linked lists do not use contiguous memory locations.

// 📌 Why Use Linked Lists?
// 🔹 Advantages Over Arrays
// Dynamic Size – No need to predefine size like arrays.
// Efficient Insertions & Deletions – Inserting/deleting in the middle is faster (O(1) if you have the pointer), unlike arrays (O(n) due to shifting elements).
// 🔸 Disadvantages
// More Memory Usage – Each node stores extra information (the pointer to the next node).
// Slower Access Time – Unlike arrays, you cannot access elements by index instantly (O(1)). Instead, you must traverse the list (O(n)).
// 📌 Understanding a Node
// Each node consists of two parts:

// Value (data)
// Pointer (next) → Links to the next node
// Example of a Node
// javascript
// Copy
// Edit
// class Node {
//     constructor(value) {
//         this.value = value;  // Data part
//         this.next = null;    // Pointer to next node
//     }
// }
// 📌 Types of Linked Lists
// Singly Linked List – Each node points to the next node.
// Doubly Linked List – Each node has a next and prev pointer.
// Circular Linked List – Last node points to the first node.
// 📌 Implementation of a Singly Linked List in JavaScript
// A singly linked list means each node only points to the next node.

// 1️⃣ Creating the Linked List Class
// javascript
// Copy
// Edit
// class LinkedList {
//     constructor() {
//         this.head = null; // The first node in the list
//         this.tail = null; // The last node in the list
//         this.size = 0;    // Number of nodes in the list
//     }
// }
// head → Points to the first node.
// tail → Points to the last node.
// size → Tracks the number of elements.
// 2️⃣ Adding Elements (Insert at End)
// javascript
// Copy
// Edit
// add(value) {
//     const newNode = new Node(value);  // Create a new node

//     if (!this.head) {  // If list is empty, set head and tail to new node
//         this.head = newNode;
//         this.tail = newNode;
//     } else {
//         this.tail.next = newNode;  // Link last node to new node
//         this.tail = newNode;       // Update tail
//     }

//     this.size++;  // Increase size count
// }
// 🛠 Example Usage
// javascript
// Copy
// Edit
// let list = new LinkedList();
// list.add(10);
// list.add(20);
// list.add(30);
// console.log(list); // LinkedList { head: Node { value: 10, next: Node { value: 20, next: [Node] } }, size: 3 }
// 3️⃣ Traversing the List (Printing All Elements)
// javascript
// Copy
// Edit
// print() {
//     let current = this.head;
//     let values = [];
    
//     while (current) {  // Traverse until the end
//         values.push(current.value);
//         current = current.next;
//     }

//     console.log(values.join(" -> "));
// }
// 🛠 Example
// javascript
// Copy
// Edit
// list.print(); // Output: 10 -> 20 -> 30
// 4️⃣ Deleting a Node
// Case 1: Remove First Node (Head)
// javascript
// Copy
// Edit
// removeFirst() {
//     if (!this.head) return; // If list is empty

//     this.head = this.head.next; // Move head to the next node
//     this.size--;

//     if (!this.head) { // If the list becomes empty
//         this.tail = null;
//     }
// }
// Case 2: Remove Last Node (Tail)
// javascript
// Copy
// Edit
// removeLast() {
//     if (!this.head) return; // If list is empty

//     if (this.head === this.tail) { // Only one node in the list
//         this.head = null;
//         this.tail = null;
//     } else {
//         let current = this.head;
//         while (current.next !== this.tail) { // Find second last node
//             current = current.next;
//         }

//         current.next = null;
//         this.tail = current;
//     }
//     this.size--;
// }
// 5️⃣ Searching for a Value
// javascript
// Copy
// Edit
// find(value) {
//     let current = this.head;
//     while (current) {
//         if (current.value === value) return true; // Found the value
//         current = current.next;
//     }
//     return false; // Not found
// }
// 🛠 Example
// javascript
// Copy
// Edit
// console.log(list.find(20)); // true
// console.log(list.find(100)); // false
// 📌 Full Linked List Implementation
// javascript
// Copy
// Edit
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     add(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//     }

//     print() {
//         let current = this.head;
//         let values = [];
//         while (current) {
//             values.push(current.value);
//             current = current.next;
//         }
//         console.log(values.join(" -> "));
//     }

//     removeFirst() {
//         if (!this.head) return;
//         this.head = this.head.next;
//         this.size--;

//         if (!this.head) this.tail = null;
//     }

//     removeLast() {
//         if (!this.head) return;

//         if (this.head === this.tail) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             let current = this.head;
//             while (current.next !== this.tail) {
//                 current = current.next;
//             }
//             current.next = null;
//             this.tail = current;
//         }
//         this.size--;
//     }

//     find(value) {
//         let current = this.head;
//         while (current) {
//             if (current.value === value) return true;
//             current = current.next;
//         }
//         return false;
//     }
// }

// // Usage
// let list = new LinkedList();
// list.add(10);
// list.add(20);
// list.add(30);
// list.print();  // Output: 10 -> 20 -> 30

// list.removeFirst();
// list.print();  // Output: 20 -> 30

// list.removeLast();
// list.print();  // Output: 20

// console.log(list.find(20)); // true
// console.log(list.find(100)); // false
// 📌 Summary
// Operation	Time Complexity	Explanation
// Add (End)	O(1)	Directly updates tail pointer
// Remove First	O(1)	Moves head pointer
// Remove Last	O(n)	Traverses list to find second last node
// Find/Search	O(n)	Traverses the list
// 📌 What's Next?
// ✅ Doubly Linked List (where each node has prev and next)
// ✅ Circular Linked List (where tail.next points to head)

// Would you like to learn Doubly Linked Lists next? 🚀


// Types of Linked Lists & Their Differences
// A linked list is a linear data structure where each element (node) contains a value and a pointer to the next node. There are different types of linked lists, each with unique characteristics.

// 📌 1. Singly Linked List (SLL)
// 📝 Definition
// A singly linked list consists of nodes, where each node has a value and a pointer to the next node. The last node points to null, indicating the end.

// 🛠 Structure
// css
// Copy
// Edit
// [Head] → [Node1] → [Node2] → [Node3] → null
// 🔹 Features
// Each node has one pointer (next).
// Traversal is one-directional (from head to tail).
// Efficient for insertion at the beginning (O(1)), but deletion at the end requires O(n).
// ⏳ Time Complexity
// Operation	Complexity
// Insert at head	O(1)
// Insert at end	O(1)
// Deletion at head	O(1)
// Deletion at end	O(n)
// Search	O(n)
// 🛠 Example in JavaScript
// javascript
// Copy
// Edit
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     add(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//     }
// }
// 📌 2. Doubly Linked List (DLL)
// 📝 Definition
// A doubly linked list is similar to a singly linked list, but each node has two pointers:

// next → Points to the next node.
// prev → Points to the previous node.
// 🛠 Structure
// css
// Copy
// Edit
// null ← [Node1] ↔ [Node2] ↔ [Node3] → null
// 🔹 Features
// Traversal can be done both forward and backward.
// More memory is used (extra prev pointer).
// Efficient deletion and insertion from both ends (O(1)).
// ⏳ Time Complexity
// Operation	Complexity
// Insert at head	O(1)
// Insert at end	O(1)
// Deletion at head	O(1)
// Deletion at end	O(1)
// Search	O(n)
// 🛠 Example in JavaScript
// javascript
// Copy
// Edit
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     add(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.prev = this.tail;
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//     }
// }
// 📌 3. Circular Linked List (CLL)
// 📝 Definition
// A circular linked list is similar to a singly linked list, but the last node points back to the head instead of null.

// 🛠 Structure
// css
// Copy
// Edit
// [Node1] → [Node2] → [Node3] ↻
// 🔹 Features
// No null at the end; last node points to the first.
// Can be either singly or doubly linked.
// Useful for applications where continuous looping is needed (e.g., round-robin scheduling).
// ⏳ Time Complexity
// Operation	Complexity
// Insert at head	O(1)
// Insert at end	O(1)
// Deletion at head	O(1)
// Deletion at end	O(n)
// Search	O(n)
// 🛠 Example in JavaScript
// javascript
// Copy
// Edit
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class CircularLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     add(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//             this.tail.next = this.head; // Points back to head
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//             this.tail.next = this.head;
//         }
//     }
// }
// 📌 Differences Between Linked Lists
// Feature	Singly Linked List	Doubly Linked List	Circular Linked List
// Pointers per node	1 (next)	2 (next, prev)	1 (next) or 2 (next, prev)
// Memory usage	Low	High (extra pointer)	Low
// Traversal	One direction	Both directions	Looping
// Insert/Delete at Head	O(1)	O(1)	O(1)
// Insert/Delete at Tail	O(1)	O(1)	O(n) (if singly)
// Search	O(n)	O(n)	O(n)
// Last Node Points To	null	null	head
// 📌 When to Use Which Linked List?
// Use Case	Best Linked List Type
// Simple list operations	Singly Linked List
// Fast traversal in both directions	Doubly Linked List
// Continuous looping (e.g., round-robin scheduling, memory buffers, games)	Circular Linked List
// 📌 Final Thoughts
// Singly Linked List – Simple & memory efficient.
// Doubly Linked List – Better for frequent insertions/deletions in the middle.
// Circular Linked List – Great for continuous looping scenarios.
// Would you like to explore doubly circular linked lists next? 🚀