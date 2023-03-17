"use strict";
var arrNum2 = [3, 1, 4, 5, 8, 13, -10, -9];
// arrNum2.sort((a, b) => {
//     return b - a
// })
// console.log(arrNum2);
function selectionsort(arr, callback) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
// selectionsort(arrNum2);
// console.log(selectionsort);
console.log(arrNum2);
