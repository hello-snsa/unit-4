function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {

        var data = newInput[a].split(" ");
        var n = data[0];
        var K = data[1];

        var str = newInput[a + 1].split(" ");

        var count = 0;



        function fun(temp, str, a, b) {
            if (a <= b + 1 && temp != "") {

                let kEven = 0;
                for (var i = 0; i < temp.length; i++) {
                    if (temp[i] % 2 == 0)
                        kEven++;
                }
                if (kEven >= K) {
                    count++;
                }
                // console.log(temp);

            }


            for (var i = a; i <= b; i++) {

                fun(temp + str[i], str, i + 1, b);

            }


        }
        fun("", str, 0, n - 1);

        console.log(count)

    }


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