
// BST (binary Search Tree)
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;

        while (true) {
            if (newNode.value === current.value) {
                return undefined
            }
            if (newNode.value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }


    }

    includes(value) {
        if (!this.root) {
            return false;
        }

        let temp = this.root;

        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true
            }
        }
        return false;
    }
}

const tree = new BST()
tree.insert(5)
tree.insert(8)
tree.insert(3)
tree.insert(1)
tree.insert(7)
tree.insert(9)
console.log('includes', tree.includes(8))
console.log(tree)