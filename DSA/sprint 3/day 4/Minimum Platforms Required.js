function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var n = Number(newInput[0]);
    var data1 = newInput[1];//.split(" ");
    var data2 = newInput[2];//.split(" ");
    data1 = data1.replace(/:/g, "");
    data2 = data2.replace(/:/g, "");

    var arr = data1.split(" ").map(Number);
    var depa = data2.split(" ").map(Number);


    // console.log(arr, depa);

    let fun = (arr, depa, n) => {
        {

            let ans = 0;
            let count = 1;


            for (let i = 0; i < n; i++) {

                ans = 1;

                for (var j = i + 1; j < n; j++) {

                    if ((arr[j] <= depa[i]) && (arr[i] <= arr[j]) || (arr[i] <= depa[j]) && (arr[j] <= arr[i])
                    )
                        ans = ans + 1;
                }

                count = fun2(count, ans);
            }

            return count;
        }

    }
    let fun2 = (a, b) => {
        if (a == b)
            return a;
        else {
            if (a > b)
                return a;
            else
                return b;
        }
    }


    let res = fun(arr, depa, n);
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