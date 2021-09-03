function runProgram(input) {

    input = input.trim();
    var newInput = input.split("\n");

    var data = newInput[0].split(" ").map(Number);
    var arr = newInput[1].split(" ").map(Number);
    var K = data[1];
    var N = data[0];

    var isAvailable = false;

    var i = 0;
    var ans = -1;

    const fun = (arr, K, l, r) => {
        if (l <= r) {
            i++;

            let mid = l + Math.floor((r - l) / 2);

            if (K < arr[mid]) {
                i++;
                return fun(arr, K, l, mid - 1);
            }
            else if (K == arr[mid]) {
                i++;
                isAvailable = true;
                ans = mid;
                fun(arr, K, l, mid - 1);//left side


            }
            else
                fun(arr, K, mid + 1, r);//right side
            i++;
        }

    }

    fun(arr, K, 0, N - 1);

    console.log(ans);

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


