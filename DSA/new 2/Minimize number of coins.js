function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var arr = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
    let n = arr.length;
    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery; a++) {


        var V = Number(newInput[a]);
        var count = 0;


        for (let i = n - 1; i >= 0; i--) {
            for (; V >= arr[i];) {
                V = V - arr[i];
                count++;
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