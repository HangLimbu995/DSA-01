

// TREE DATA STRUCTURE IN JAVASCRIPT 

// 1. What is Tree? 
// --> A tree is a hierarchical data structure that consists of nodes. It starts from a root node and branches out to other nodes, forming a  tree-like structure. Each node has a  value and references to its child nodes.

// --> A DS tree is a fundamental hierarchical data structure. It represents a collection of elements (data) called nodes, connected by edges (links) forming a tree-like structure.


// 2. Basic Terminologies in Trees

// a. Root Node: The top-most node of the tree.
// b. Parent Node: A node that has child nodes.
// c. Child Node: Nodes that descend from a parent.
// d. Leaf Node: A node with no children.
// e. Sibling Nodes: Nodes that share the same parent.
// f. Edge: The connection between two nodes.
// g. Depth: The number of edges from the rooth to a node.
// h. Height: the number of edges in the longest path from a node to a leaf.
// i. Subtree: A tree formed by any node and its descendants.

// 3. Types of Trees
// a. General Tree
// --> A tree where each node can have any number of children.

// b. Binary Tree
// --> A tree where each node can have  at most two children (left and right).
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// c. Binary Search Tree (BST)
// --> A BST  is a special kind of binary tree used to organize data in a sorted way. It works like a filing cabinet where you can efiiciently search, add, or remove items.

// --> A binary tree with the rule:
// i. Left subtree contains values less than the parent.
// ii. Right subtree contains values greater than the parent.
class BST {
    constructor(value) {
        this.root = new TreeNode(value)
    }

    insert(value) {
        const newNode = new TreeNode(value);
        let current = this.root;

        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
}

// d. Balanced Binary Tree
// --> A tree where the height difference between left and right subtrees is at most 1.

// e. Complete Binary Tree
// --> A tree where all levels are filled except possible the last level, which is filled from left to right.

// f. Full Binary Tree.
// --> A tree where every node has 0 or 2 children.

// g. Perfect Binary Tree
// --> A tree where all levels are completely filled.

// h. AVL Tree (Self-Balancing BST)
// --> A BST that keeps itself balanced using rotations.

// i. Trie (Prefix Tree)
// --> A tree used for storing strings efficiently, mainly used in the text searches.

// 4. Tree Traversals
// --> Traversal means visiting all nodes in a particular order.

// a. Depth-First Search (DFS)

// i. Inorder (Left, Root, Right) 
function inorder(node) {
    if (node) {
        inorder(node.left)
        console.log(node.value);
        inorder(node.right);
    }
}

// ii. Preorder (Root,Left,Right)
function preorder(node) {
    if (node) {
        console.log(node.value)
        preorder(node.left);
        preorder(node.right)
    }
}

// iii. Postorder(Left, Right, Root)
function postorder(node) {
    if (node) {
        postorder(node.left);
        postorder(node.right);
        console.log(node.value)
    }
}

// iv. Breadth-First Search (BFS) / Level Order
function levelOrder(root) {
    if (!root) return;

    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.value);

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
}

// 5. Operations on a BST
// a. Insert a Node
function insertNode(root, value) {
    if (!root) return new TreeNode(value);

    if (value < root.value) {
        root.left = insertNode(root.left, value);
    } else {
        root.right = insertNode(root.right, value)
    }

    return root;
}

// b. Search a Node
function search(root, value) {
    if (!root || root.value === value) return root;

    return value < root.value
        ? search(root.left, value)
        : search(root.right, value)
}

// c. Find Minimun & Maximum in BST
function findMin(node) {
    while (node.left) node = node.left;
    return node.value;
}

function findMax(node) {
    while (node.right) node = node.right;
    return node.value;
}

// d. Delete a Node
function deleteNode(root, value) {
    if (!root) return root;

    if (value < root.value) {
        root.left = deleteNode(root.left, value);
    } else if (value > root.value) {
        root.right = deleteNode(root.right, value)
    } else {
        if (!root.left) return root.left;
        if (!root.right) return root.right;

        let minRight = findMin(root.right);
        root.value = minRight;
        root.right = deleteNode(root.right, minRight);
    }

    return root;
}

// 6. Advanced Trees

// a. AVL Tree (self-balancing)
// i. Uses rotations to maintain balance.
// ii. Operations: Insertion, Deletion, Rotation.

// b. Red-Black Tree
// i.Each node is either red or black.
// ii. Used in JavaScript's Map and Set for fast lookups.

// c. Segment Tree
// i. Used for range queries like sum, min, max in an array.

// d. Trie (Prefix Tree)
// i. Used in search autocomplete and dictionary world storage.

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) node.children[char] = new TrieNode();
            node = node.children[char];
        }
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEnd;
    }
}

// 7. Real-World Applications of Trees

    // a. File System Hierarchies (Foldres and Subfoldres)
    // b. Database Indexing (B-Trees, B+ Trees) 
    // c. Autocomplete in Search Engines (Trie)
    // d. Syntax Trees in Compilers
    // e. Artificial Intelligence (Decision Trees)
    // f. Social Media (Graph Trees for Recommendations)
    // g. Network Routing Algorithms (Spanning Trees)

// 8. Summary

// Concept        |   Explanation
// -- Tree        |   A hierarchical data structure with nodes and edges.
// -- Binary Tree |  A tree where each node has at most two children.
// -- BST         |  A binary tree with left < parent(root) < right.
// -- Traversals  |  DFS (Inorder, Preorder, Postorder) and BFS.
// -- Operations  |  Insert, Search, Delete, Min, Max in BST.
// -- Advanced    |  AVL, Red-Black, Trie, Segment Tree
// -- Applications | File Systems, Database Indexing, Autocomplete, Syntax Trees, AI, Social Media, Network Routing.