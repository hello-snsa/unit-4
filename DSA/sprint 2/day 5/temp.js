
function push(head_ref, new_data) {

    var new_node = new Node(head_ref, new_data);

    head = new_node;
    return head;
}

function printList(head) {
    while (head != null) {
        console.log(head.data + "-> ");
        head = head.next;
    }
    console.log("null<br />");
}
