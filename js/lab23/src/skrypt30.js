"use strict";
class Sorter {
    constructor(items) {
        this.items = items;
    }
    insertionSort() {
        for (let i = 1; i < this.items.length; i++) {
            let key = this.items[i];
            let j = i - 1;
            while (j >= 0 && this.items[j] > key) {
                this.items[j + 1] = this.items[j];
                j--;
            }
            this.items[j + 1] = key;
        }
    }
    getItems() {
        return this.items;
    }
}
const numerySorter = new Sorter([5, 2, 9, 1]);
numerySorter.insertionSort();
console.log(numerySorter.getItems());
const stringSorter = new Sorter(['jefen', 'dwa', 'trzy']);
stringSorter.insertionSort();
console.log(stringSorter.getItems());

// [ 1, 2, 5, 9 ]
// [ 'dwa', 'jefen', 'trzy' ]