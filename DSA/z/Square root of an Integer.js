function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery; a++) {


        var num = Number(newInput[a]);

        // console.log("data", data);


        const fun = (n) => {
            var ans = 1;
            if (n == 0) {
                return n;
            }
            else if (n == 1) {
                return n;
            }
            let F = 1;
            let L = n;


            for (var i = 1; L >= F; i++) {


                let midd = "";
                midd += (F + L) / 2;


                let mid = "";
                let isBreak = false;

                for (let aa = 0; aa < midd.length; aa++) {

                    if (midd[aa] == ".") {

                        for (let bb = 0; bb < aa; bb++) {
                            mid += midd[bb];

                        }
                        isBreak = true;
                        break;

                    }



                }
                if (!isBreak) {
                    mid = midd;
                }



                // console.log("midsssd", mid);



                if (mid * mid < n) {
                    F = mid + 1;
                    ans = mid;
                }

                if (mid * mid == n)
                    return mid;

                else
                    L = mid - 1;
            }

            return (ans);
        }


        let ress = fun(num);
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