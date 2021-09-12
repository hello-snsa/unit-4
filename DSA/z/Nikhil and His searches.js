function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);


    var len = Number(newInput[0]);
    var arr = newInput[1].split(" ").map(Number);
    var Q = Number(newInput[2]);


    for (var a = 3; a < Q + 3; a++) {


        var data = newInput[a].split(" ").map(Number);
        var query = Number(data[0]);
        var num = Number(data[1]);

        var count = 0;

        if (query == 0) {

            for (var i = 0; i < len; i++) {
                if (num <= arr[i]) {
                    count++;
                }
            }
        }
        else {
            for (var i = 0; i < len; i++) {
                if (num < arr[i]) {
                    count++;
                }
            }

        }

        console.log(count);



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