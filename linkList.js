
// // THIS IS "SINGLY LINKED LIST" IMPLEMENTATION IN JAVASCRIPT
// class Node {
//     constructor(value) {
//         this.head = value;
//         this.next = null;
//     }
// }

// class LinkedList {
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
//             return null;
//         }

//         let temp = this.head;
//         let prev = this.head;

//         while (temp.next) {
//             prev = temp;
//             temp = prev.next;
//         }

//         this.tail = prev;
//         this.tail.next = null;
//         this.length--;

//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null
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
//         return this
//     }

//     shift() {
//         if (!this.head) {
//             return null;
//         }
//         // 1. Point the first node/ element
//         let temp = this.head;

//         // 2. Move the head to next node/element
//         this.head = this.head.next;
//         // 3. Remove first element
//         temp.next = null;
//         this.length--;

//         if (this.length === 0) {
//             this.tail = null;
//         }
//         return temp;
//     }

//     getFirst() {
//         if (!this.head) {
//             return undefined;
//         }

//         return this.head;
//     }

//     getLast() {
//         if (!this.head) {
//             return undefined;
//         }

//         // return this.tail

//         let temp = this.head;

//         while (temp) {
//             if (!temp.next) {
//                 return temp;
//             }
//             temp = temp.next;
//         }
//     }

//     get(idx) {
//         if (!this.head) {
//             return undefined;
//         }
//         let counter = 0;
//         let check = this.head

//         while (check) {
//             if (counter === idx) {
//                 return check;
//             }
//             counter++;
//             check = check.next;
//         }
//     }

//     set(idx, value) {
//         let newNode = new Node(value);

//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         }

//         let temp = this.get(idx);

//         if (temp) {
//             temp.value = value;
//             return true;
//         }

//         return false;
//     }

//     insert(idx, value) {
//         if (idx === 0) {
//             return this.unshift(value);
//         }

//         if (idx === this.length) {
//             return this.push(value);
//         }

//         const newNode = new Node(value);

//         // Uses the get method to find the node right before the desired position (index - 1).
//         const temp = this.get(idx - 1);

//         newNode.next = temp.next;
//         temp.next = newNode;
//         this.length++;
//         return true;
//     }

//     size() {
//         if (!this.head) {
//             return 0;
//         }
//         // let counter = 0;
//         // while(this.head) {
//         //     counter++;
//         //     this.head = this.head.next;
//         // }

//         return this.length;
//     }

//     clear() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0
//         return this;
//     }

// }

// const myLinkedList = new LinkedList(1);
// myLinkedList.push(2)
// // myLinkedList.push(33)
// // myLinkedList.push(12)
// // myLinkedList.push(15)
// // myLinkedList.push(20)
// // myLinkedList.pop()
// // myLinkedList.unshift(0)
// // myLinkedList.shift()
// // console.log('first',myLinkedList.getFirst())
// // console.log('last',myLinkedList.getLast())
// // console.log('get', myLinkedList.get(3))
// // console.log('set', myLinkedList.set(3, 30))
// // console.log('insert', myLinkedList.insert(1, 30))
// // console.log('count', myLinkedList.size())
// console.log('count', myLinkedList.clear())
// console.log(myLinkedList); // LinkedList { head: Node { head: 1, next: null }, tail: Node { head: 1, next: null }, length: 1 }


// ###################################################
// THIS IS "DOUBLY LINKED LIST" IMPLEMENTATION IN JAVASCRIPT

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }


    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        this.length++;

        return newNode;
    }

    pop() {

        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }


        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
        return this;
    }

    unshift(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        let temp = this.head.next;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        this.head.next = null;
        temp.prev = null;
        this.head = temp;
        this.length--;
        return this;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }
        return this;

    }
}

let myDoublyLinkedList = new DoublyLinkedList(0);
console.log(myDoublyLinkedList.push(1))
console.log(myDoublyLinkedList.push(5))
// console.log('pop is', myDoublyLinkedList.pop())
console.log('unshift is', myDoublyLinkedList.unshift(12))
// console.log('shift is', myDoublyLinkedList.shift())
console.log('revers is', myDoublyLinkedList.reverse())


//  STACK & QUEUE 2.45.34