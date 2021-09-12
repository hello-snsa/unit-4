const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {

    var h = head;
    var c = 0;
    var n = null;

    while (c < position) {
        c = c + 1;
        n = h;
        h = h.next;

    }
    h = h.next;
    n.next = h;
    return head;
}