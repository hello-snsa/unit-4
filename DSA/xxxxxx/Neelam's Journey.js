function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var data = newInput[1].split(" ").map(Number);

    //   console.log("data", data);

    var temp = data[0];
    var count = temp;

    for (let i = 1; i < data.length; i++) {

        if (temp < data[i]) {
            data[i] = temp;
            // console.log("inside IF", count)

        }
        else {
            temp = data[i];
            // console.log("inside else", count)

        }
        count += temp;

        // console.log("inside outside", count)


    }

    console.log(count)


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