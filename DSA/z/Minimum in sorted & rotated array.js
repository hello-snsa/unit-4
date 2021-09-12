function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var arr = newInput[1].split(" ").map(Number);

    var len = newInput[0];


    // console.log(len, arr)



    const fun = (arr, first, last) => {

        if (last == first) {
            return arr[first];
        }

        else if (last < first) {
            return arr[0];
        }


        var mid = first + Math.floor((last - first) / 2);



        if (mid > first && arr[mid] < arr[mid - 1]) {
            return arr[mid];
        }

        else if (arr[last] > arr[mid]) {
            return fun(arr, first, mid - 1);
        }
        else if (mid < last && arr[mid + 1] < arr[mid]) {
            return arr[mid + 1];
        }
        else {
            return fun(arr, mid + 1, last);
        }
    }

    let res = fun(arr, 0, len - 1);
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