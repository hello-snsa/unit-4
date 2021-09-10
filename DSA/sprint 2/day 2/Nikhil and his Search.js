function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);


    var len = Number(newInput[0]);
    var arr = newInput[1].split(" ").map(Number);
    // arr.sort((a, b) => { return (a - b) })
    var Q = Number(newInput[2]);


    for (var a = 3; a < Q + 3; a++) {


        var data = newInput[a].split(" ").map(Number);
        var query = Number(data[0]);
        var num = Number(data[1]);

        var count = 0;

        function findMid(f, l) {

            let mid = Math.floor(f + l / 2);
            if (arr[mid] < num)
                findMid(mid + 1, l)
            else if (arr[mid] == num)
                return mid;
            // else if (arr[mid] > num)
            //     findMid(f, mid - 1)
        }

        let j = findMid(0, len - 1);
        if (query == 0) {





            for (var i = j; i < len; i++) {
                if (num <= arr[i]) {
                    count = len - i;
                    break;
                }
            }
        }
        else {
            for (var i = 0; i < len; i++) {
                if (num < arr[i]) {
                    count = len - i;
                    break;
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