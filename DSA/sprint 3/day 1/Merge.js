var mergeTwoLists = function (ll1, ll2) {

    let l1 = ll1;
    let l2 = ll2;
    let dummy = new node(-1);
    let l3 = dummy;



    if (l1 == null)
        return l2;
    if (l2 == null)
        return l1;

    if (l2.nodeData > l1.nodeData) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else if (l2.nodeData < l1.nodeData) {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;

    }
    else {
        // l1.next = mergeTwoLists(l1.next, l2);
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }




}