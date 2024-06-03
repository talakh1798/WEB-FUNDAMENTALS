// Better than average

function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;
    // console.log(average);

    var count = 0
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] > average) {
            count++;
        }

    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4