const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head, n) {
    let count = 1;
    let temp = head;
    while (temp.next != null) {
        temp = temp.next;
        count++;
    }

    temp = head;
    let count2 = 1;
    let sum = temp.data;
    let total = count
    while (total > 0) {

        if (count2 == (count - n + 1)) {
            sum = temp.data;
        }
        temp = temp.next;
        count2++;
        total--;



    }
    return sum;





}
