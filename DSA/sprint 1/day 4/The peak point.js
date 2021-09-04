function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {

        var len = Number(newInput[a]);
        var arr = newInput[a + 1].split(" ").map(Number);

        // console.log("data", arr, len);

        const fun = (arr, len) => {

            if (arr[0] >= arr[1] || len == 1) {
                return 0;
            }

            else if (arr[len - 2] <= arr[len - 1]) {
                return len - 1;
            }

            else {
                for (var i = 1; i < len - 1; i++) {


                    if (arr[i] >= arr[i + 1] && arr[i] >= arr[i - 1]) {
                        return i;
                    }
                }
            }
        }

        let res = fun(arr, len)
        console.log(res);


    }//end of Query

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