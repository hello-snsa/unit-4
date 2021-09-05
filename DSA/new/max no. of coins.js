// n = len(piles)


let piles = [2, 4, 1, 3, 5, 6];

let n = piles.length;
let sum = 0;

let sorted_piles = piles.sort();

for (let i = 0; i < n; i++) {
    sum += (sorted_piles[i]);
    console.log(sum)
}

// return sum

// console.log(sum)

// sorted_piles = sorted(piles)[:: -1]
// return sum(sorted_piles[i] for i in range(1, n))