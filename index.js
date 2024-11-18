// 回调函数
function map (arr,callback){
    let res = []
    for (let i = 0; i < arr.length; i++){
        res.push(callback(arr[i],i,arr))
    }
    return res
}
function callback(n){
    return n + 1
}

console.log(map([1,2,3],callback)) 

//...符号，正运算将参数变成数组，负运算将数组变成参数
function sum1(...args){ //参数后面不能写其他参数
    return args.reduce((pre,cur) => pre + cur,0)
}
console.log(sum1(1,2,3,4,5))

function add(a,b,...args){
    let total = []
    for (let i = 0; i < args.length; i++){
        total.push(args[i])
    }
    return total
}

//将数组变成参数
let a = [1,2,3,4,5]
console.log('max:'+Math.max(...a))

function sum2(a,b){
    return a + b
}
console.log(sum2(...a))