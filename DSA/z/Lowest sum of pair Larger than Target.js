function runProgram(input) {
    input = input.trim();

    var newInput = input.split(/[\r\n]+/);

    var noOfQuery = Number(newInput[0]);

    for (var a = 1; a <= noOfQuery * 2; a += 2) {

        var data = newInput[a].split(" ").map(Number);
        var n = data[0];
        var T = data[1];

        var arr = newInput[a + 1].split(" ").map(Number);




        let max = T + 1;
        var newArr = [];

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] >= max) {
                    newArr.push(arr[i] + arr[j])
                }
            }
        }
        // console.log(newArr)

        newArr.sort((a, b) => (a - b));
        console.log(newArr[0])



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