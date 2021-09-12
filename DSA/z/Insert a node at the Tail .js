const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    var node = new LinkedListNode(data);
    if (head == null) {
        head = node;
        return head;
    }

    let h = head;
    while (h.next) {
        h = h.next;
    }
    h.next = node;

    return head;
}