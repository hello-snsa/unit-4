function runProgram(input) {
    input = input.trim();

    var data = input.split(" ");
    var n = data[0];
    var K = data[1];
    var str = "";

    for (let i = 1; i <= n; i++) {
        str += i;
    }
    // console.log(str)



    function fun(temp, str, a, b) {
        if (a <= b + 1 && temp != "") {

            if (temp.length == K) {
                let res = "";
                for (let i = 0; i < K; i++) {
                    res += temp[i] + " ";
                }
                console.log(res);
            }

        }


        for (var i = a; i <= b; i++) {

            fun(temp + str[i], str, i + 1, b);

        }


    }
    fun("", str, 0, n - 1);

    // console.log(count)




}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});