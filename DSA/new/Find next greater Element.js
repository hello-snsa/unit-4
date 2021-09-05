function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {

        var n = newInput[a];

        var arr = newInput[a + 1].split(" ").map(Number);
        var count = 0;

        for (var i = 0; i < n - 1; i++) {
            if (arr[i + 1] % 2 == 0) {
                count += arr[i];
            }
        }



        console.log(count)
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