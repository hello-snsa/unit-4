function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var n = Number(newInput[0]);
    var arr = newInput[1].split(" ").map(Number);
    let sum = 0;


    arr.sort((a, b) => (a - b));



    for (let i = 0; i < n; i++) {

        sum += (arr[i] * i);
    }


    console.log(sum);


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