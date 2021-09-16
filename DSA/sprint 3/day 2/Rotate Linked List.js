
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function (head) {

    let current = head;
    let res = 0;
    while (current.next != null) {
        res = res * 10 + current.data;
        current = current.next;
    }
    res = res * 10 + current.data;

    res++;

    current.next = null;
    current.data = (res)
    return current

};

