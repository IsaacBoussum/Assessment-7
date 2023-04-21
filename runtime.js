const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


// const tinyArray = getSizedArray(10);
// const smallArray = getSizedArray(100);
// const mediumArray = getSizedArray(1000);
// const largeArray = getSizedArray(10000);
// const extraLargeArray = getSizedArray(100000);

const arraySizes = {
    "tiny": getSizedArray(10),
    "small": getSizedArray(100),
    "medium": getSizedArray(1000),
    "large": getSizedArray(10000),
    "extraLarge": getSizedArray(100000),
};

const results = {};

for (let size in arraySizes) {
    const nums = arraySizes[size];
    perf.start();
    doublerAppend(nums);
    const appendTime = perf.stop().time;

    perf.start();
    doublerInsert(nums);
    const insertTime = perf.stop().time;

    results[size] = {
        "append": appendTime,
        "insert": insertTime,
    };
}

// How long does it take to double every number in a given 
// array? 

// // Try it with first function
// perf.start();                     // Starts timer
// doublerAppend(extraLargeArray);
// let resultsAppend = perf.stop();  // Stops timer and save time results


// // Try it with second function
// perf.start();
// doublerInsert(extraLargeArray);
// let resultsInsert = perf.stop();


// console.log('Results for the extraLargeArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);

console.log("Results:");
console.log(results);