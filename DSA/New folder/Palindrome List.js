const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    //
    let temp = head;
    let res = [];
    let ans = [];
    let count = 0;

    while (temp.next != null) {

        res.push(temp.data);

        temp = temp.next;

    }
    res.push(temp.data);



    for (let i = res.length - 1; i >= 0; i--) {
        ans.push(res[i]);

    }
    res = res.join("");
    ans = ans.join("");
    // console.log(res);
    //console.log(ans);
    if (res == ans)
        return true;
    else


        return false
};