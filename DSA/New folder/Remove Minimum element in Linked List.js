
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function (head) {


    let temp = head;
    let res = "";
    let min = head.data;
    let count = 0;

    if (head.next == null)
        return null;

    while (temp.next != null) {
        if (min == temp.data)
            count++;
        if (min > temp.data) {
            count = 1;
            min = temp.data;
        }
        temp = temp.next;
    }

    temp = head;
    while (temp.next != null) {

        if (temp.data != min) {

            res += temp.data;

        }
        else if (count > 1) {
            count--;
            res += temp.data;
            console.log("temp", temp.data, count)
        }
        temp = temp.next;

    }

    //  res=Number(res);

    temp.data = res;

    return temp;


};

