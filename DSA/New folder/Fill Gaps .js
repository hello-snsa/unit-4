
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function (head) {

    let h = head.data;

    let temp = head;
    while (temp.next != null) {
        temp = temp.next;

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

