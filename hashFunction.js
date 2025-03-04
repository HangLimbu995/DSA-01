class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size); // Creating a array of with size 7
    }

    _hashFunction(key) {
        let sum = 0;
        const PRIME_NUMBER = 31

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(i) - 96;
            sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length
        }
        return sum;
    }

    set(key, value) {
        const index = this._hashFunction(key)

        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value])
        return this;
    }

    get(key) {
        const index = this._hashFunction(key);

        if (this.keyMap[index]) {
            for (let pair of this.keyMap[index]) {
                if (pair[0] === key) return pair[1];
            }

        }

        return undefined;
    }

    getAllKeys() {
        let keys = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys;
    }

    getAllValues() {
        let values = [];

        for (let data of this.keyMap) {
            if (data) {
                for (let value of data) {
                    values.push(value[1])
                }
            }
        }
        return values;
    }
}

const phoneBook = new HashTable();
phoneBook.set('name', 'hang')
// phoneBook.set('name', 'limbu')
phoneBook.set('age', 23)
phoneBook.set('add', 'ktm')
console.log(phoneBook.get('name'))
console.log(phoneBook.get('age'))
console.log(phoneBook.getAllKeys())
console.log(phoneBook.getAllValues())
console.log(phoneBook)