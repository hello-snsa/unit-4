function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");
    var arr = newInput[1].split(" ").map(Number);
    arr.sort((a, b) => (a - b));
    let temp = arr[0];
    let temp2 = 0;
    let count = 1;
    let count2 = 0;
    let res = 1;



    for (let i = 1; i < arr.length; i++) {
        temp2 = temp2 + arr[i];
        count2++;

        if (count < count2 && temp < temp2) {

            count = count2;
            temp = temp2;
            count2 = 0;
            temp2 = 0;
            res = res + 1;
        }
    }


    console.log(res);


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
