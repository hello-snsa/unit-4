
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function (head) {

    let h = head.data;

    let temp = head;
    let count = 0;
    while (temp.next != null) {
        count++;
        temp = temp.next;

    }

    if (count <= 1) {
        return head;
    }
    let l = temp.data;
    let res = '';

    for (let i = h; i <= l; i++) {
        res += i + " ";

    }
    // res=Number(res);

    temp.data = res
    return temp
};

