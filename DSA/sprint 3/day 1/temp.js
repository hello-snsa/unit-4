

class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

function newNode(key) {
    var temp = new Node();
    temp.data = key;
    temp.next = null;
    return temp;
}

function printList(node) {
    while (node != null) {
        document.write(node.data + " ");
        node = node.next;
    }
}

function mergeUtil(h1, h2) {
    if (h1.next == null) {
        h1.next = h2;
        return h1;
    }

    var curr1 = h1, next1 = h1.next;
    var curr2 = h2, next2 = h2.next;

    while (next1 != null && curr2 != null) {
        if ((curr2.data) >= (curr1.data) &&
            (curr2.data) <= (next1.data)) {
            next2 = curr2.next;
            curr1.next = curr2;
            curr2.next = next1;

            curr1 = curr2;
            curr2 = next2;
        } else {
            if (next1.next != null) {
                next1 = next1.next;
                curr1 = curr1.next;
            }

            else {
                next1.next = curr2;
                return h1;
            }
        }
    }
    return h1;
}


function merge(h1, h2) {
    if (h1 == null)
        return h2;
    if (h2 == null)
        return h1;


    if (h1.data < h2.data)
        return mergeUtil(h1, h2);
    else
        return mergeUtil(h2, h1);
}

