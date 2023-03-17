"use strict";
// 1. Function declaration
function func1() {
    console.log("func1");
}
var func2 = function () {
    console.log("func2");
};
var func3 = function () {
    console.log("func3");
};
// 2. ham khai báo có dữ liệu trả về
function func4() {
    return "";
}
function func5() {
    console.log("hello word");
}
function func6() {
    while (true) {
    }
}
function func7() {
    var erro = new Error("Something went wrong!");
    throw erro;
}
// 3 function parameter 
function divide(a, b) {
    if (b) {
        return a - b;
    }
    else {
        return a;
    }
}
function divide2(a, b) {
    if (b === void 0) { b = 0; }
    return a - b;
}
divide(10);
//4 rest parameter 
var showclasses = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return "sing vien ".concat(name, " hoc lop ").concat(classes.join(","));
};
console.log(showclasses("quang hau", "nodejs"));
console.log(showclasses("quang hau", "typescrip"));
// 5 callback 
var num_arr = [5, 6, 7];
var temp = num_arr.map(function (item, index) {
    return item * 2;
});
//consloe.log(temp);
// const  we17304_map = function(arr: number[],callback?:(item:number)=> number ){
//     const temp = [];
//     for(let i = 0; i < arr.length; i++){
//         const newItem = callback(arr[i]);
//         temp.push (newItem);
//     }
//     return temp;
// }
// const result = we17304_map(num_arr, (item)=>{
//     return item * item 
// })
//  console.log(result);
