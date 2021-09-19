function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var n = Number(newInput[0]);
    var data1 = newInput[1];
    var data2 = newInput[2];
    data1 = data1.replace(/:/g, "");
    data2 = data2.replace(/:/g, "");

    var arr = data1.split(" ").map(Number);
    var depa = data2.split(" ").map(Number);

    let ans = 0;
    let count = 1;


    let fun2 = (a, b) => {
        if (a == b) {

            return a;
        }
        else {
            if (a > b) {

                return a;
            }
            else
                return b;
        }
    }


    for (let i = 0; i < n; i++) {

        ans = 1;

        for (var j = i + 1; j < n; j++) {

            if ((arr[j] <= depa[i]) && (arr[i] <= arr[j]) || (arr[i] <= depa[j]) && (arr[j] <= arr[i])
            )
                ans = ans + 1;
        }

        count = fun2(count, ans);
    }


    console.log(count);

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