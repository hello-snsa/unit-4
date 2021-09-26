main()
{
    let t, n, x, y, i, j, k;
    let ans;
    cin >> t;


    while (t--) {
        scan(n);
        scan(x);
        scan(y);


        for (i = 0; i < n; ++i) {
            scan(a[i]);
            scan(b[i]);
        }
        sort(a, a + n);
        sort(b, b + n);
        ans = 0;
        for (i = 0; i < n; ++i) {
            if (a[i] < b[i]) {
                ans += x * (b[i] - a[i]);
            } else {
                ans += y * (a[i] - b[i]);
            }
        }
        printf("%lld\n", ans);
    }

    return 0;
}


