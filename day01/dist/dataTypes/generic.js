"use strict";
//generic
function showstringdata(a) {
    return a;
}
function shownumberdata(a) {
    return a;
}
function showdata(a) {
    return a;
}
showdata("string");
var arrnum = [1, 2, 3, 5, 8, 13];
var arrstr = ["quang", "hau", "quy", "luong"];
// function we17304_map(arr:number[],callback:(item:number)=>number):number[]{
//     let temp=[]
//     for(let i = 0 ; i<arr.length;i++){
//         const newitem = callback(arr[i])
//         temp.push(newitem)
//     }
//     return temp;
// }
function we17304_map(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i]);
        temp.push(newItem);
    }
    return temp;
}
var result = we17304_map(arrstr, function (item) {
    return item + " - web17304";
});
console.log(result);
