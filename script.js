
class Node {
    constructor(value) {
        this.value = value || null;
        this.next = null;
    }
}


class LinkedLists {
    constructor() {
        this.head = null;
    }

    append(value) {

        if (this.head == null) {
            this.head = new Node(value);
            return
        }

        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = new Node(value);
    }

    prepend(value) {
        const oldFirstNode = this.head;

        this.head = new Node(value);
        this.head.next = oldFirstNode;
    }

    size() {
        let currentNode = this.head;
        let totalNodes = 0;

        while (currentNode !== null) {
            totalNodes += 1;
            currentNode = currentNode.next
        }

        return totalNodes;
    }

    head() {
        return this.head;
    }

    tail() {
        let currentNode = this.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        return currentNode
    }

    at(index) {
        let currentNode = this.head;
        
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    pop() {
        let previousNode;
        let currentNode = this.head;

        while (currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = null;
    }

    contains(value) {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true
            }
            currentNode = currentNode.next;
        }

        return false
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.next;
            index += 1;
        }

        return null;
    }

    toString() {
        let currentNode = this.head;
        let container = "";

        while (currentNode !== null) {
            container += `( ${currentNode.value} ) => `;
            currentNode = currentNode.next;
        }

        container += null;

        return container;
    }

}


const list = new LinkedLists();

list.append("dog"); // dog
list.append("cat"); // dog > cat
list.prepend("cow"); // cow > dog > cat
list.append("rabbit"); // cow > dog > cat > rabbit
list.append("No Animal"); // cow > dog > cat > rabbit > No Animal

console.log('Size: ' + list.size()); // 5
console.log(list.head); // cow
console.log(list.tail()); // No Animal

console.log(list.at(2)); // cat

list.pop(); // cow > dog > cat > rabbit
console.log('New Size: ' + list.size()); // 4
console.log(list);// cow > dog > cat > rabbit

console.log(list.contains("cow")); // true
console.log(list.find("dog")); // cat

console.log(list.toString()); // ( cow ) => ( dog ) => ( cat ) => ( rabbit ) => null