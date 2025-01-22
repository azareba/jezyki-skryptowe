class Sorter <T extends number | string> {
    private items: T[];

    constructor(items: T[]) {
        this.items = items
    }

    public insertionSort(): void {
        for (let i = 1; i < this.items.length; i++) {
            let key = this.items[i]
            let j = i - 1
            while (j >= 0 && this.items[j] > key) {
                this.items[j + 1] = this.items[j]
                j--
            }
            this.items[j + 1] = key
        }
    }
    public getItems(): T[] {
        return this.items;
    }

}

const numerySorter = new Sorter<number>([5, 2, 9, 1])
numerySorter.insertionSort()
console.log(numerySorter.getItems())

const stringSorter =  new Sorter<string>(['jefen','dwa','trzy'])
stringSorter.insertionSort()
console.log(stringSorter.getItems())
