function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 3; a += 3) {


        var data = newInput[a].split(" ").map(Number);
        var m = data[0];
        var n = data[1];

        var boy = newInput[a + 1].split(" ").map(Number);
        var girl = newInput[a + 2].split(" ").map(Number);
        boy.sort((a, b) => (a - b));
        girl.sort((a, b) => (a - b));

        let count = 0;
        let temp = 0;


        if (m > n) {
            console.log("NO");
        }
        else {
            for (let i = 0; i < m; i++) {

                for (let j = temp; j < n; j++) {
                    if (boy[i] > girl[j]) {
                        count++;
                        temp = j + 1;
                        break;
                    }
                }
            }

            if (count >= m) {
                console.log("YES");
            } else {
                console.log("NO");
            }
        }

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