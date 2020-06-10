// import visualization libraries {
const { Tracer, Array1DTracer, ChartTracer, LogTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');
const { randomNumArr } = require('../Tools');
// }

// define tracer variables {
const chart = new ChartTracer();
const tracer = new Array1DTracer();
const logger = new LogTracer();
Layout.setRoot(new VerticalLayout([chart, tracer, logger]));
const arr = Randomize.Array1D({ N: 25 });
// const arr = randomNumArr(15);
tracer.set(arr);
tracer.chart(chart);
Tracer.delay();
// }

// logger {
logger.println(`original array = [${arr.join(', ')}]`);
// }


bubbleSort(arr);
function bubbleSort(arr) {
    let len = arr.length,
        swapped,
        processCount = 0;
    do {
        swapped = false;
        tracer.select(len - 1);
        Tracer.delay();
        for (let j = 1; j < len; j++) {
            tracer.select(j);
            Tracer.delay();

            processCount ++;
            if (arr[j - 1] > arr[j]) {
                // console.log("swap!", arr[j - 1], arr[j]);
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                swapped = true;

                tracer.patch(j - 1, arr[j - 1]);
                tracer.patch(j, arr[j]);
                Tracer.delay();
                tracer.depatch(j - 1);
                tracer.depatch(j);
            }
            tracer.deselect(j);
        }
        tracer.deselect(len - 1);
        len--;
    } while (swapped);

    // console.log('processCount:', processCount);
    return arr;
}