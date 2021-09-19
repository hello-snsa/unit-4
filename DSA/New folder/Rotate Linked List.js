
var rotateRight = function (head, k) {

    if (head == null) {
        return head;
    }

    var temp = head;
    var count = 1;

    while (temp.next != null) {
        count++;
        temp = temp.next;
    }

    if (k > count) {
        k = k % count;
    }


    k = count - k;

    if (k == count || k == 0) {
        return head;
    }

    var ch = head;

    count = 1;
    while (count < k && ch != null) {
        ch = ch.next;
        count++;
    }

    if (ch == null) {
        return head;
    }

    var node = ch;

    temp.next = head;
    head = node.next;
    node.next = null;

    return head;
}

