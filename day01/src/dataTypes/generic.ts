//generic

function showstringdata(a: string): string {
    return a;
}
function shownumberdata(a: number): number {
    return a;
}

function showdata<t>(a: t): t {
    return a;
}

showdata<string>("string")


const arrnum = [1,2,3,5,8,13]
const arrstr = ["quang","hau","quy","luong"]


// function we17304_map(arr:number[],callback:(item:number)=>number):number[]{
//     let temp=[]
//     for(let i = 0 ; i<arr.length;i++){
//         const newitem = callback(arr[i])
//         temp.push(newitem)
//     }
//     return temp;
// }

function we17304_map<T>(arr: T[], callback: (item: T) => T): T[] {
    let temp = []
    for(let i = 0; i < arr.length; i++) {
        const newItem1 = callback(arr[i]);
        temp.push(newItem1);
    }
    return temp
}
const result = we17304_map(arrstr,(item)=>{
    return item + " - web17304"
})
        
console.log(result);



