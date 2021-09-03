function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);


    var len = Number(newInput[0]);
    var arr = newInput[1].split(" ").map(Number);
    arr.sort((a, b) => { return (a - b) })
    var Q = Number(newInput[2]);


    for (var a = 3; a < Q + 3; a++) {


        var data = newInput[a].split(" ").map(Number);
        var query = Number(data[0]);
        var num = Number(data[1]);

        var count = 0;

        if (query == 0) {
            fun1(num, 0, len - 1);
        }
        else {
            fun2(num, 0, len - 1);


        }


        function fun1(K, l, r) {

            if (r >= l) {

                let mid = l + Math.floor((r - l) / 2)

                if (arr[mid] < K) {
                    return fun1(K, mid - 1, r);

                }

                else if (arr[mid] >= K) {

                    return (count = len - mid - 1);
                }
            }


        }

        function fun2(K, l, r) {

            if (r >= l) {

                let mid = l + Math.floor((r - l) / 2)

                if (arr[mid] <= K) {
                    return fun2(K, mid - 1, r);

                }

                else if (arr[mid] > K) {

                    return (count = len - mid - 1);
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