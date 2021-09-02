function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery; a++) {


        var n = Number(newInput[a]);

        // console.log("data", data);


        const fun = (n) => {

            let res;
            let end = n;

            if (n == 0) {
                return n;
            }
            else if (n == 1) {
                return n;
            }


            for (let i = 0, ans = 1; ans >= end; i++) {

                var mid = (end + ans) / 2;

                if (mid * mid == n) {
                    return mid;
                }
                if (mid * mid < n) {
                    ans = mid + 1;
                    res = mid;
                }

                else {
                    end = mid - 1;
                }
                return res;

            }
        }

        let ress = fun(n);
        console.log(ress)



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