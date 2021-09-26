

let n, a, b;
n = 3;//no of tasks
arr(n);
// a: first integer
// b: Second integer

for (let i = 0; i < n; i++) {
    cin >> a >> b;
    arr[i] = make_pair(a, b);
}
sort(arr.begin(), arr.end());
	lli total = 0, curr = 0;
for (auto ele : arr)
{
    curr += ele.first;
    total += ele.second - curr;
}
console.log(total);
