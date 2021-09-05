function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {

        var data = newInput[a].split(" ").map(Number);
        var n = data[0];
        var T = data[1];
        var isBreak = false;

        var arr = newInput[a + 1].split(" ").map(Number);

        arr.sort((a, b) => (a - b));


        // console.log(arr)

        for (var i = 0; i < arr.length - 1; i++) {
            if (!isBreak)
                fun(i, 1);

        }

        function fun(i, j) {

            if (i >= arr.length - 1) {
                return;
            }
            if (arr[i] + arr[j] > T) {
                console.log(arr[i] + arr[j])
                isBreak = true;
                return;
            }

            fun(i, j + 1)


        }



    }


}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});