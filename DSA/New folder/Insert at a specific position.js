
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {

    //console.log("temp",position);
    if (head == null) {
        return null;
    }

    let count = 0;
    let temp = head;
    const node = new LinkedListNode(data);

    if (position == 0) {
        node.next = temp;
        return node
    }

    while (temp.next != null) {
        count++;
        if (count === (position)) {
            node.next = temp.next;
            temp.next = node;

            return head;
        }
        temp = temp.next;

    }


    return head;

}

