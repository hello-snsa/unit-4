const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function (l1, l2) {
    if (l1 == null || l2 == null) {

        if (l1 == null && l2 != null) {
            return l2;
        }
        else if (l1 != null && l2 == null) {
            return l1;
        }
        else {
            return null;
        }
    }

    let node, tempHead;

    if (l1.val < l2.val) {
        node = l1;
        tempHead = l1;
        l1 = l1.next;
    }
    else {
        node = l2;
        tempHead = l2;
        l2 = l2.next;
    }

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            node.next = l1;
            l1 = l1.next;
        }
        else {
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next;
    }

    if (l1 == null) {
        node.next = l2;
    } else {
        node.next = l1;
    }
    return tempHead;
};