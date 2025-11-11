// console.log("file is runigng")

// function add(a,b){
//     return a+b
// }
// var add = (a,b) => {return a+b}
// var add = (a,b) => a+b;

// (function(){
//     console.log("sachin")
// })()

// var addition = add(31,5)
// console.log(addition)

function callback(){
    console.log("callback is working")
}

const add = function(a,b,callback){
let result = a+b
console.log('result:'+result)
callback()
}
add(9,8,callback)



add(2,5, () => console.log("call back is also working")) //another way to se call back function//

