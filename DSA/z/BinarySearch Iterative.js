function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var arr = newInput[1].split(" ").map(Number);
    var data = newInput[0].split(" ").map(Number);
    var N = data[0];
    var K = data[1];

    var isAvailable = -1;
    // console.log(N,K)



    const fun = (arr, K, l, r) => {

        if (r >= l) {

            let mid = l + Math.floor((r - l) / 2)

            if (arr[mid] == K) {
                isAvailable = 1;
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

    let res = fun(arr, K, 0, N - 1);
    // console.log("res", res)


    if (isAvailable != 1)
        console.log(isAvailable);

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