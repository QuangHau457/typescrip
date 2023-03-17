const arr : Array<string> = ["a","b","c","d","e"];

const arr2 : number[][]= [[1,2,3],[4,5,6]];

const arr3 : string[] = ["f","e","g"];

//any 
let str3: any = 10
str3 = "hello "
str3 = [1,2,3]


//tuples
const tuple : [string,string,number] = ["haunam","thaibinh",20]


//enum
enum STATUS {PENDING,REJECTED,FULFILLED}

const trangthai1: STATUS = STATUS.PENDING

console.log(trangthai1);

enum CODE{SUCCESS=200,CLIENT_ERROR=400,SERVER=500}
const error: CODE = CODE.CLIENT_ERROR        
