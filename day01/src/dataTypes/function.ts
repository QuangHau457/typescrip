// 1. Function declaration

function func1(){
    console.log("func1");
    
}

const func2 = function(){
    console.log("func2");
    
}

const func3 = () =>{
    console.log("func3");
    
}

// 2. ham khai báo có dữ liệu trả về

function func4(): string {
    return "";
}

function func5(): void{
    console.log("hello word");
    
}

function func6 () : never {
    while(true){

    }
}

function func7() : never {
    const erro = new  Error("Something went wrong!")
    throw erro;
}

// 3 function parameter 
function divide(a: number, b?: number): number{
    if(b){
        return a-b
    }else{
        return a
    }
}

function divide2(a: number, b: number=0): number{
    return a-b
}

divide(10)

//4 rest parameter 
const showclasses = (name: string, ...classes:string[]):string=>{
    return `sing vien ${name} hoc lop ${classes.join(",")}`
}

console.log(showclasses("quang hau","nodejs"));
console.log(showclasses("quang hau","typescrip"));

// 5 callback 

const num_arr = [5,6,7]
const temp = num_arr.map((item,index)=>{
    return item*2
})

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
