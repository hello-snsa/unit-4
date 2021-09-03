function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery; a++) {


        var data = newInput[a].split(" ").map(Number);

        // console.log("data", data);



        var A = data[0];
        var B = data[1];
        var C = data[2];
        var K = data[3];

        var X;
        var res = -1;


        for (let i = 0; i < K; i++) {
            let X = i;
            if (A * (X ** 2) + B * X + C >= K) {
                res = X;
                break;
            }
        }

        console.log(res)


    }//end of Query

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