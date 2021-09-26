

    public static ArrayList < Integer > countRounds(ArrayList < Integer > arr, ArrayList < ArrayList < Integer >> queries) {

        int n = arr.size();
        int m = queries.size();

    ArrayList < Integer > answer = new ArrayList < Integer > ();

    for (int j = 0; j < m; j++) {
            int firstIndex = queries.get(j).get(0) - 1;
            int secondIndex = queries.get(j).get(1) - 1;

            int temp = arr.get(firstIndex);
        arr.set(firstIndex, arr.get(secondIndex));
        arr.set(secondIndex, temp);

            int totalRounds = 0;

            int currentNumber = 1;

        while (currentNumber <= n) {
            for (int i = 0; i < n; i++) {
                if (currentNumber == arr.get(i)) {
                    currentNumber++;
                }
            }

            totalRounds++;
        }

        answer.add(totalRounds);
    }

    return answer;

}

}