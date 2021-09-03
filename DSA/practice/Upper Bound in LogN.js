
// // index of 1st No. which is greater than k

// var arr = [0, 2, 4, 4, 5, 5, 7, 7, 9, 10];
// var len = 10;
// var k = 4;
// // k = 3;
function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var data = newInput[0].split(" ").map(Number);
    var arr = newInput[1].split(" ").map(Number);
    var len = data[0];
    var k = data[1];


    var res = -1;
    var index;//if we want to find index also.

    const fun = (i, l) => {

        if (l >= i) {
            let mid = Math.floor((i + k) / 2);

            if (arr[mid] k) {
                res = 1;
                index = mid + 1;
                fun(mid + 1, l)

                return;
            }
            else if (arr[mid] > k) {
            return fun(i, mid - 1);
        }
        else {
            return fun(mid + 1, l)
        }
    }

}
let i = 0;
fun(i, len); //here i is the initial starting index;



console.log(index)


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


