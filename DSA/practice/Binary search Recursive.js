// if K is present, Print 1 else print -1
var arr = [0, 2, 4, 4, 5, 5, 7, 7, 9, 10];
// arr = [3, 4, 0, 2, 7];

var len = 10;
len = 5;
var k = 4;
k = 3;

var res = -1;
var index;//if we want to find index also.

const fun = (i, l) => {

    if (l >= i) {
        let mid = i + Math.floor((l - i) / 2);
        // console.log(mid)

        if (arr[mid] == k) {
            res = 1;
            index = mid;
            return;
        }
        else if (arr[mid] > k) {
            return fun(i, mid - 1);
        }
        else {
            return fun(mid + 1, l)
        }
    }

}
let i = 0;
fun(i, len); //here i is the initial starting index;



console.log(res)
console.log("index is ", index)


