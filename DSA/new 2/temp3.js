let arr = [2, 4, 1, 3, 5, 6];
arr = [2, 4, 5]
arr = [9, 8, 7, 6, 5, 1, 2, 3, 4]
arr = [2, 4, 1, 2, 7, 8];
arr.sort((a, b) => a - b);

let n = arr.length;
let ans = 0;


for (var i = (n / 3); i < n; i += 2) {

    ans = ans + arr[i];
}


console.log(ans)
