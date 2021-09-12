function runProgram(input) {
    input = input.trim();

    var data = input.split(/[\r\n]+/);
    var n = data[0];//3
    var arr = data[1].split(" ").map(Number);
    var ans = "";
    for (var i = arr[0]; i <= arr[n - 1]; i++) {
        ans += i + " ";

    }

    console.log(ans)


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