
let F = 0;
let L = 73;


let midd = "";
midd += (F + L) / 2;

console.log("midsssd", midd); //36.5

let mid = "";
let isBreak = false;

for (let aa = 0; aa < midd.length; aa++) {

    if (midd[aa] == ".") {

        for (let bb = 0; bb < aa; bb++) {
            mid += midd[bb];

        }
        isBreak = true;
        break;

    }



}
if (!isBreak) {
    mid = midd;
}

