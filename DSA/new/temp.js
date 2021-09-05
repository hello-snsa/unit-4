

let arr = [4, 2, 1, 5, 3]
console.log(countRounds(arr, 5))
function countRounds(arr, queries) {

    let n = arr.length;
    let m = queries.length;


    let answer = [];

    let positions = [];

    positions[0] = 0;
    positions[n + 1] = n + 1;

    for (let i = 0; i < n; i++) {
        positions[arr.get(i)] = i + 1;
    }

    let totalRounds = 1;

    for (let currentNumber = 2; currentNumber <= n; currentNumber++) {
        if (positions[currentNumber] < positions[currentNumber - 1]) {
            totalRounds++;
        }
    }

    for (let j = 0; j < m; j++) {
        let firstIndex = queries.get(j).get(0);
        let secondIndex = queries.get(j).get(1);
        let firstValue = arr.get(firstIndex - 1);
        let secondValue = arr.get(secondIndex - 1);

        if (positions[firstValue - 1] > positions[firstValue]) {
            totalRounds--;
        }

        if (positions[firstValue] > positions[firstValue + 1]) {
            totalRounds--;
        }

        if (secondValue - 1 != firstValue && positions[secondValue - 1] > positions[secondValue]) {
            totalRounds--;
        }

        if (secondValue + 1 != firstValue && positions[secondValue] > positions[secondValue + 1]) {
            totalRounds--;
        }

        positions[firstValue] = secondIndex;
        positions[secondValue] = firstIndex;

        let temp = arr.get(firstIndex - 1);
        arr.set(firstIndex - 1, arr.get(secondIndex - 1));
        arr.set(secondIndex - 1, temp);

        if (positions[firstValue - 1] > positions[firstValue]) {
            totalRounds++;
        }

        if (positions[firstValue] > positions[firstValue + 1]) {
            totalRounds++;
        }

        if (secondValue - 1 != firstValue && positions[secondValue - 1] > positions[secondValue]) {
            totalRounds++;
        }

        if (secondValue + 1 != firstValue && positions[secondValue] > positions[secondValue + 1]) {
            totalRounds++;
        }

        answer.add(totalRounds);
    }

    return answer;

}


