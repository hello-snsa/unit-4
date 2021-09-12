const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function (head) {

    if (head != null) {
        var count = 0;
        var mid = head;

        while (head != null) {

            if (count % 2 == 1) {
                mid = mid.next;
            }

            head = head.next;
            count++;
        }

        if (mid != null && mid.data)

            return mid.data
    }
}