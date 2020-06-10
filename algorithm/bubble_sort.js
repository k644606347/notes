// const { Randomize } = require('algorithm-visualizer');

// const Mock = require('mockjs');

// console.log(Mock.mock({
//     'data|+1': [1]
// }));

'use strict';
const { randomNumArr } = require('../Tools');

function bubbleSort(arr) {
    let len = arr.length,
        swapped,
        processCount = 0;
    do {
        swapped = false;
        for (let j = 1; j < len; j++) {
            processCount ++;
            if (arr[j - 1] > arr[j]) {
                // console.log("swap!", arr[j - 1], arr[j]);
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                swapped = true;
            }
        }
        len--;
    } while (swapped);

    console.log('processCount:', processCount);
    return arr;
}

let arr = randomNumArr(100);
bubbleSort([...arr]);
