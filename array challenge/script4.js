// Array Reverse

function reverse(arr) {
    var RevArr = [];
    for (var i= arr.length - 1; i >= 0; i--) {
        // arr[i]=arr[arr.length-1-i];
        // arr[i] == arr[arr.length - 1];
        RevArr.push(arr[i]);

    }
    
    return RevArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]