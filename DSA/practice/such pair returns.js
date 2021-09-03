function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a].split(" ").map(Number);
        var arr = newInput[a + 1].split(" ").map(Number);

        //   console.log("data", data);

        arr.sort((a, b) => { return (a - b) });

        var len = data[0];


        var k = data[1];



        var I = 0;

        var res = -1;
        var index;//if we want to find index also.
        var count = -1;

        while (I < len) {

            let i = I + 1;
            fun(i, len);
            I++;
        }

        function fun(i, l) {


            if (l >= i) {
                let mid = Math.floor((i + l) / 2);
                index = mid;

                if (arr[mid] + arr[I] == k) {
                    res = 1;
                    index = mid;
                    count = 1;
                    return;
                }
                else if (arr[mid] > k) {
                    return fun(i, mid - 1);
                }
                else {
                    return fun(mid + 1, l)
                }
            }

        }
        //here i is the initial starting index;



        console.log(count)



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