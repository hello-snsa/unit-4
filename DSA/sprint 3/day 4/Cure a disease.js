function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var len = Number(newInput[0]);
    var data = newInput[1].split(" ").map(Number);
    var arr = newInput[2].split(" ").map(Number);

    var isTrue = true;

    data.sort((a, b) => (a - b))
    arr.sort((a, b) => (a - b))

    for (let i = 0; i < data.length; i++) {
        if (data[i] < arr[i]) {
            isTrue = false;
        }
    }

    isTrue ? console.log("Yes") : console.log("No")


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