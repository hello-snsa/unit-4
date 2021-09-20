function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var len = Number(newInput[0]);
    var data = newInput[1].split(" ").map(Number);
    var arr = newInput[2].split(" ").map(Number);


    data.sort((a, b) => (a - b))
    arr.sort((a, b) => (a - b))

    // console.log(data1, arr1)

    var max = 0;

    for (let i = 0; i < data.length; i++) {
        let sum = Math.abs(data[i] - arr[i]);
        if (sum > max) {
            max = sum;
        }
    }

    console.log(max)

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