
class node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function printlist(head) {
    while (head != null) {
        document.write(head.val + " ");
        head = head.next;
    }
}

var head1, head2, result;
var carry;

function push(val, list) {
    var newnode = new node(val);
    if (list == 1) {
        newnode.next = head1;
        head1 = newnode;
    } else if (list == 2) {
        newnode.next = head2;
        head2 = newnode;
    } else {
        newnode.next = result;
        result = newnode;
    }

}

function addsamesize(n, m) {
    if (n == null)
        return;

    addsamesize(n.next, m.next);

    var sum = n.val + m.val + carry;
    carry = parseInt(sum / 10);
    sum = sum % 10;

    push(sum, 3);

}

var cur;

function propogatecarry(head1) {
    if (head1 != cur) {
        propogatecarry(head1.next);
        var sum = carry + head1.val;
        carry = parseInt(sum / 10);
        sum %= 10;

        push(sum, 3);
    }
}

function getsize(head) {
    var count = 0;
    while (head != null) {
        count++;
        head = head.next;
    }
    return count;
}

function addlists() {
    if (head1 == null) {
        result = head2;
        return;
    }

    if (head2 == null) {
        result = head1;
        return;
    }

    var size1 = getsize(head1);
    var size2 = getsize(head2);

    if (size1 == size2) {
        addsamesize(head1, head2);
    }

    else {
        if (size1 < size2) {
            var temp = head1;
            head1 = head2;
            head2 = temp;
        }

        var diff = Math.abs(size1 - size2);

        var temp = head1;
        while (diff-- >= 0) {
            cur = temp;
            temp = temp.next;
        }

        addsamesize(cur, head2);

        propogatecarry(head1);
    }
    if (carry > 0)
        push(carry, 3);

}

// Driver program to test above functions

head1 = null;
head2 = null;
result = null;
carry = 0;
var arr1 = [9, 9, 9];
var arr2 = [1, 8];

// Create first list as 9->9->9
for (i = arr1.length - 1; i >= 0; --i)
    push(arr1[i], 1);

// Create second list as 1->8
for (i = arr2.length - 1; i >= 0; --i)
    push(arr2[i], 2);

addlists();

printlist(result);


