function runProgram(input) {

    input = input.trim();
    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {


        var data = newInput[a].split(" ").map(Number);
        let k = data[1];
        var arr = newInput[a + 1].split(" ").map(Number);

        var i = 0;
        var temp;

        while ((k > 0) && (i < arr.length - 1)) {

            var F = i;

            for (var j = i + 1; j < arr.length; j++) {
                if (k < (j - i)) {

                    break;
                }

                if (arr[F] > arr[j]) {

                    F = j;
                }
            }

            for (var j = F; j > i; j--) {

                swapIt(j)

            }

            k = k - (F - i);
            i++;
        }

        function swapIt(j) {
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }

        console.log(arr.join(" "));



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