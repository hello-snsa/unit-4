function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var data = newInput[0].split(" ").map(Number);
    var len = Number(data[0]);
    var noOfQuery = Number(data[1]);
    var arr = newInput[1].split(" ").map(Number);

    // console.log("data", data);
    // console.log("noOfQuery", noOfQuery);
    // console.log("arr", arr);
    // console.log("len", len);

    arr.sort((a, b) => (a - b))
    // console.log("arrr ", arr)
    for (var a = 2; a < noOfQuery + 2; a++) {

        var K = newInput[a];

        var isAvailable = "NO";

        const fun = (arr, K, l, r) => {

            if (r >= l) {

                let mid = l + Math.floor((r - l) / 2)

                if (arr[mid] == K) {
                    isAvailable = "YES";
                    console.log(isAvailable);
                    return;
                }
                else if (arr[mid] > K) {
                    return fun(arr, K, l, mid - 1);
                }
                else {
                    return fun(arr, K, mid + 1, r);
                }
            }


        }

        let res = fun(arr, K, 0, len - 1);

        if (isAvailable != "YES")
            console.log(isAvailable);


    }

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