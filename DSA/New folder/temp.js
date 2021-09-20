
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function (head) {

    let h = head.data;
    let temp = head;

    let n1 = num(data1);
    let n2 = num(data2);


    function num(data) {

        let arr = [];

        while (temp.next != null) {
            arr.push(temp.data);


            temp = temp.next;

        }

        arr.push(temp.data);
        return arr;


    }




    let fArr = [];

    let carry = 0;
    for (let i = n1.length - 1, j = n2.length - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = n1[i] + n2[j] + carry;

        if (sum > 9) {
            carry = 1;
            sum += - 10;
        }
        else {
            carry = 0;
        }

        fArr.push(sum);

    }

    console.log(fArr);

    let tempArr1;
    let tempArr2;
    n1.length > n2.length ? (tempArr1 = n1, tempArr2 = n2) : (tempArr = n2, tempArr2 = n1);

    for (let i = (tempArr1.length - tempArr2.length) - 1; i >= 0; i--) {

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

