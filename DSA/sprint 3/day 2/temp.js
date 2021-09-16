
class LinkedListNode {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}


var rotateRight = function (head, k) {

    if (head == null)
        return head;

    var tmp = head;
    var len = 1;
    while (tmp.next != null) {
        tmp = tmp.next;
        len++;
    }

    if (k > len)
        k = k % len;

    k = len - k;

    if (k == 0 || k == len)
        return head;

    var current = head;
    var cnt = 1;
    while (cnt < k && current != null) {
        current = current.next;
        cnt++;
    }

    if (current == null)
        return head;

    var kthnode = current;

    tmp.next = head;

    head = kthnode.next;

    kthnode.next = null;

    return head;
}


function push(head, newData) {
    var tempNode = new LinkedListNode();

    tempNode.data = newData;

    tempNode.next = (head);

    (head) = tempNode;
    return head;
}

function printList(node) {
    while (node != null) {
        document.write(node.data + " -> ");
        node = node.next;
    }
    document.write("null");
}



