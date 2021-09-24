function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a].split(" ").map(Number);
        var n = data[0];
        var k = data[1];
        var arr = newInput[a + 1].split(" ").map(Number);

        // console.log("data", arr,k,n);

        let op1 = 3;
        let op2 = 5;

        let cost1 = 0;
        let cost2 = 0;
        let max = 0;
        let min = arr[0];

        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i]
            }

            if (min > arr[i]) {
                min = arr[i]
            }

        }


        let med = Math.ceil((max + min) / 2)


        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < med) {
                while (arr[i] < med) {
                    arr[i]++;
                    cost1 += op1;
                    console.log("smaller", cost1, i)

                }
            }
            if (arr[i] > med) {
                while (arr[i] > med) {
                    arr[i]--;
                    cost2 += op2;
                    console.log("greater", cost2, i)
                }
            }
        }

        console.log(med)
        console.log(cost1)
        console.log(cost2)



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