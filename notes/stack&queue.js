// Everything About Stack & Queue in JavaScript (DSA)
// --> Stacks & Queue  are fundamental linear data structures in Data Structures & Algorithms (DSA). They are used in programming for undo/redo, function calls, and tasks scheduling.

// ### STACK (LIFO --> Last In, Last Out)
// A STACK follows LIFO(Last In, Last Out) princliples, meaning last to be added is first to be removed.

// *** REAL-WORLD Examples.
//  1. Stack of plates --> The last plate to be added is first to be removed.  O(1)
// 2. Browser history --> The last visited page is first to show when hit "BACK".  O(1)
// 3. Undo/Redo operations --> The last action is undone first.

//  ** Stack Operations.
// -- push() ===> Adds an element to the top of the stack.   O(1)
// -- pop() ===> Removes and returns the top element.   O(1)
// -- peek() ===> Returns the top element without removing it. O(1)
// -- isEmpty() ===> Checks if the stack is empty. O(1)
// -- Size() ===> Returns the number elements in the stack. O(1).

// ** Stack Implementation in JavaScript.

//  1. Using an Array.
// --> JavaScript arrays already have push() & pop(), making them ideal for stacks.

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//          this.items.push(element);
//     }

//     pop() {
//         return this.items.length > 0 ? this.items.pop() : "Stack is empty";
//     }

//     peek() {
//         return this.items.length > 0 ? this.items[this.items.length - 1] : "Stack is empty";
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }
// }

// let stack = new Stack();
// stack.push(10)
// stack.push(20)
// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.peek())
// console.log(stack.isEmpty())
// console.log(stack.size())

//  2. Using a Linked List (Better for Large Data)
// --> Arrays are not always effecient for stacks because of resize operations. Using a linked list avoids this issue.

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.length = 0;
//     }

//     push(value) {
//         let newNode = new Node(value);
//         newNode.next = this.top;
//         this.top = newNode;
//         this.length++;
//     }

//     pop() {
//         if(!this.top) return 'Stack is empty!';
//         let removedValue = this.top.value;
//         this.top = this.top.next;
//         this.length--;
//         return removedValue;
//     }

//     peek() {
//         return this.top ? this.top.value : 'Stack is empty!';
//     }

//     isEmpty() {
//         return this.length === 0;
//     }

//     size() {
//         return this.length;
//     }
// }

// let stack = new Stack();
// stack.push(10)
// stack.push(20)
// console.log('peek', stack.peek())
// console.log('pop', stack.pop())
// console.log('isEmpty', stack.isEmpty())
// console.log('size', stack.size())
// console.log('stack', stack)

// ### Advantages and Disadvantages between Array-Based Stack and Linked List-Based stacks.

// 1. Array-Based Stack.

// ** Advantages:
// a. faster access: Accessing elements via index is 0(1).
// b. Better cache locality: Arrays are stored in contiguous memory, making them cache-friendly and improving performance.
// c. Simpler implementation: Uses a fixed-size array with a top pointer.

// ** Disadvantages:
// a. Fixed size (static allocation): You must define themaximum size in advance, leading to possible wasted space or overflow.
// Resizing overhead: If the array is full, resizing involves copying all elements to a new larger array (O(n) time).

// 2. Linked List-Based Stack.

// ** Advantages:
// a. Dynamic size: Can grow and shrink as needed, avoiding wasted space.
// b. No resizing needed: Always fits the exact number of elements.

// ** Disadvantages:
// a. Extra memory usage: Each node requires extra memory for a pointer, leading to higher overhead.
// b. Slower access: Elements are scattered in memory, reducing cache efficiency.
// c More complex implementation: Requires managing pointers and memory allocation.

// ### Which One to Use?

// ** Use array-based stack if:
// -- You know the maximum size in advance.
// -- Memory overhead is a concern.
// -- Speed is critical (better cache performance).

// ** Use Linked List-based stack if:
// -- You need a flexible, dynamic size.
// -- Memory allocation efficiency is less important.
// -- You expect frequent push/pop operations with varying sizes.

// For most applications, an array-based stack is preferable due to its simplicity and efficiency unless you specifically need a dynamic-sized stack.

// ### Queue (FIFO - First In, First Out)
// --> A queue follows the FIFO (First In, First Out) principle, meaning the first item added is hte first to be removed.

// ** Real-World Examples
// a. Waiting in line --> The frist person in line is served first.
// b. Task scheduling --> Jobs are processed in the order they arrive.
// c. Printing tasks --> The first document to be added is printed first.

// ** Queue Operations.
// a. enqueue() ---> Adds an element to the end. O(1)
// b. dequeue() ---> Removes an element from the front. O(1)
// c.front() ---> Returns the first element without removing it. O(1)
// d. isEmpty() ---> Returns true if the queue is empty. O(1)
// e. size() ---> Returns the number of elements in the queue. O(1)

// ** Queue Implementation in JavaScript.

// 1. Using an Array (Basic).

// class Queue {
//     constructor() {
//         this.items = []
//     }

//     enqueue(element) {
//         this.items.push(element)
//     }

//     dequeue() {
//         return this.items.length > 0 ? this.items.shift() : 'Queue is empty'
//     }

//     front() {
//         return this.items.length > 0 ? this.items[0] : 'Queue is empty'
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }
//     size() {
//         return this.items.length;
//     }
// }

// let queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.front())
// console.log(queue.dequeue())
// console.log(queue.front())
// console.log(queue.isEmpty())
// console.log(queue.size())

// 2. Using a Linked List (Efficient for Large Data)

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.front = null;
//         this.rear = null;
//         this.length = 0;
//     }

//     enqueue(value) {
//         let newNode = new Node(value);
//         if (!this.rear) {
//             this.front = this.rear = newNode;
//         } else {
//             this.rear.next = newNode;
//             this.rear = newNode;
//         }
//         this.length++;
//     }

//     dequeue() {
//         if (!this.front) return "Query is empty"
//         let removedValue = this.front.value;
//         this.front = this.front.next;
//         if (!this.front) this.rear = null;
//         this.length--;
//         return removedValue;
//     }

//     frontValue() {
//         return this.front ? this.front.value : "Queue is empty"
//     }

//     isEmpty() {
//         return this.length === 0
//     }

//     size() {
//         return this.length
//     }
// }

// let queue = new Queue();
// queue.enqueue(10)
// queue.enqueue(50)
// queue.enqueue(80)
// console.log('dequeue', queue.dequeue())
// console.log('front', queue.frontValue())
// console.log('empty', queue.isEmpty())
// console.log('size', queue.size())
// console.log(queue)

// ** Variants of Queues

// 1. Circular Queue
// -- A queue that connects the rear and front, making better use of memory.
// -- Used in CPU scheduling and buffering.

// 2. Double-Ended Queue (Deque)
// -- Allows insertion and deletion from both ends.
// -- Can be implemented using a Doubly Linked List.

// 3. Priority Queue.
// -- Elements are dequeued based on priority instead of order.
// -- Used in Dijkstra's Algorithm and job scheduling.

// ## Stack vs Queue: Key Differences
// Features:    Stack(LIFO)             Queue(FIFO)
// insertion     push() (Top)         enqueue()(Rear)
// Removal       pop()(Top)           dequeue()(Front)
// Access Order    Last In, First Out      First In, First Out
// Usage           Function calls, Undo/Redo          Task scheduling, Print queue

// #### Summary
// -- Stack = LIFO -> Use when you need to access the most recent item first.
// -- Queue = FIFO -> Use when order matters (e.g., task scheduling).
// -- Array-based implementation are simple but less efficient for large data.
// -- Linked List implementations are better for large-scale applications.


// ### Array-Based Queue vs. Linked List-Based Queue: Which is better?
//  --> The choice between array-based queues and linked list-based queues depennds on factors like memory efficiency, performance, and use case. Here's a detailed comparison:

// 1. Array-Based Queue

// ** Advantages:
// -- Faster access: Accessing elements via index is O(1).
// -- Better cache locality: Stored in contiguous memory, making access faster.
// -- Simple implementation: Uses a fixed-size array with front and rear pointers.

// ** Disadvantages:
// -- fixed size (static allocation): Needs predefined size, which may lead to wasted space or overflow.
// -- Shifting overhead (in some implementations): A simple queue may require shifting elements after dequeuing (O(n) time), though circular queues solve this.
// -- Resizing overhead: If full, expanding the array requires O(n) time to copy elements.
// -- Optimization: Use a circular queue to avoid shifting elements and optimize enqueue/dequeue operations to O(1).

// 2. Linked List-Based Queue.

// ** Advantages:
// -- Dynamic size: Can grow and shrink as needed, avoiding wasted space.
// -- Efficient enqueue/dequeue: Both operations take O(1) time since we only update pointers.

// ** Disadvantages:
// -- extra memory usage: Each node requires additional memory for pointers.
// -- Slower access: Elements are scattered in memory, reducing cache efficiency.
// -- More complex implementations: Requires pointer management and dynamic memory allocation.

// *** Which One to Use?

// 1. Use array-based queue if:
// -- You know the maximum size in advance.
// -- Memory efficiency and speed (cache locality) are important.
// -- You implement a circular queue to optimize performance.

// 2. Use linked list-based queue if:
// -- The size of the queue  varies significantly.
// -- You need efficient O(1) enqueue and dequeue operations.
// -- You can afford extra memeory for pointers.

// Note** For most cases, an array-based circular queue is preferred due to its simplicity and efficiency unless dynamic sizing is required.