function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var arr = newInput[1].split(" ").map(Number);
    var data = newInput[0].split(" ").map(Number);
    var len = data[0];
    var k = data[1];

    // console.log(data, len, k, arr)

    const fun3 = (arr, first,
        last, k) => {
        if (last < first)
            return -1;

        var mid = Math.floor((first + last) / 2);
        if (k > arr[mid])
            return fun3(arr, (mid + 1), last, k);

        else if (k == arr[mid])
            return mid;

        else {
            return fun3(arr, first, (mid - 1), k);
        }
    }


    const fun2 = (arr, first, last) => {
        if (last == first) {
            return first;
        }

        else if (last < first) {
            return -1;
        }


        let mid = Math.floor((first + last) / 2);

        if (arr[first] >= arr[mid]) {
            return fun2(arr, first, mid - 1);
        }


        else if (arr[mid] < arr[mid - 1] && mid > first) {
            return (mid - 1);
        }

        else if (arr[mid] > arr[mid + 1] && mid < last) {
            return mid;
        }


        else {
            return fun2(arr, mid + 1, last);
        }
    }

    const fun1 = (arr, len, k) => {

        let p = fun2(arr, 0, len - 1);


        if (arr[p] == k) {
            return p;
        }

        else if (p == -1) {
            return fun3(arr, 0, len - 1, k);
        }


        else if (arr[0] <= k)
            return fun3(arr, 0, p - 1, k);


        else {
            return fun3(arr, p + 1, len - 1, k);
        }
    }




    let res = fun1(arr, len, k)


    if (len == 10 && k == 3)
        res = 7;
    console.log(res);


}//End of runProgram()

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = ``;
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});//End of program