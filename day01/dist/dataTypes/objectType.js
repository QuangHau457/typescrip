"use strict";
var arr = ["a", "b", "c", "d", "e"];
var arr2 = [[1, 2, 3], [4, 5, 6]];
var arr3 = ["f", "e", "g"];
//any 
var str3 = 10;
str3 = "hello ";
str3 = [1, 2, 3];
//tuples
var tuple = ["haunam", "thaibinh", 20];
//enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFILLED"] = 2] = "FULFILLED";
})(STATUS || (STATUS = {}));
var trangthai1 = STATUS.PENDING;
console.log(trangthai1);
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    CODE[CODE["SERVER"] = 500] = "SERVER";
})(CODE || (CODE = {}));
var error = CODE.CLIENT_ERROR;
