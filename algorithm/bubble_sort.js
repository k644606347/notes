function bubbleSort(arr) {
    let N = arr.length, D = arr, swapped;
    do {
        swapped = false;
        for (let j = 1; j < N; j++) {
            console.log('bubbleSort process');
            if (D[j - 1] > D[j]) {
                console.log('swap!', D[j-1], D[j]);
                let temp = D[j - 1];
                D[j - 1] = D[j];
                D[j] = temp; swapped = true;
            }
        }
    } while (swapped);
    return arr;
}


function bubbleSort2(arr) {
    let N = arr.length, D = arr, swapped = false;
    for (let i = N; i > 0; i--) {
        for (let j = 1; j < i; j++) {
            console.log('bubbleSort2 process');
            if (D[j - 1] > D[j]) {
                let temp = D[j - 1];
                D[j - 1] = D[j];
                D[j] = temp; swapped = true;
            } bbb
        }
    } return arr;
}

console.log(bubbleSort([1, 10, 3, 4, 5]));
console.log(bubbleSort2([1, 10, 3, 4, 5]));