
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function (head, k) {


    if (k == 0)
        return;

    let current = head;

    while (current.next != null) {
        current = current.next;
    }


    current.next = head;
    current = head;

    for (i = 0; i < k - 1; i++)
        current = current.next;

    head = current.next;
    current.next = null;

    return head
}

function push(new_data) {


    var new_node = new Node();

    new_node.data = new_data;
    new_node.next = head;
    head = new_node;
}

function printList(node) {
    while (node != null) {
        console(node.data + " ");
        node = node.next;
    }
}
