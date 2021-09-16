function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var total = newInput[0].split(" ").map(Number);
    var c = total[1];
    var r = total[2];


    var data = newInput[1].split(" ").map(Number);

    data = data.sort((a, b) => { return (a - b) })
    var sum = 0;
    //console.log("data", data);


    for (let i = 0; i < c; i++) {
        sum += data[i]
    }

    if (sum <= r) {
        console.log("Party")
    }
    else {
        console.log("Sad")

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