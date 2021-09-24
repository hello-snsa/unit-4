


function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var C = Number(newInput[0]);
    var len = Number(newInput[1]);




    var value = newInput[2].split(" ").map(Number);
    var wt = newInput[3].split(" ").map(Number);

    value.sort((a, b) => (a - b));
    wt.sort((a, b) => (a - b));

    let res = val;

console.log()





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















