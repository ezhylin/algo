class Item {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.first = null;
        this.item = null;
    }

    addFirst(data) {
        this.first = new Item(data, this.first);
    }

    getFirst() {
        return this.first;
    }

    removeFirst() {
        this.first = this.first ? this.first.next : null;
    }

    getLast() {
        let item = this.first;

        while (item.next) {
            item = item.next;    
        }

        return item;
    }

    getSize() {
        let counter = this.first;
        let item = this.first;

        while (item) {
            counter++;        
            item = item.next;    
        }

        return counter;
    }

    clear() {
        this.first = null;
    }
}