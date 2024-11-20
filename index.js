// 回调函数
function map1(arr,callback){
    let res = []
    for (let i = 0; i < arr.length; i++){
        res.push(callback(arr[i],i,arr))
    }
    return res
}
function callback(n){
    return n + 1
}

console.log(map1([1,2,3],callback)) 

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
    return [total,a,b]
}
console.log(add(1,2,3,4,5))

//将数组变成参数
let a = [1,2,3,4,5]
console.log('max:'+Math.max(...[1,2,3,4,5]))

function sum2(a,b){
    return a + b;
}
//如果数组里给的参数多，会自动忽略多余的参数
console.log(sum2(...a))

import {aa,b,c} from './m1.js';
console.log(aa,b,c)

import * as math from './circleplus.js';
console.log(math.area(2));


var set1 = new Set();

[31,123,23,31,123].map((x) => set1.add(x));

for (let i of set1){
    console.log(i);
}


function dedupe(array){
    //array.from()方法从一个类似数组或可迭代对象创建一个新的数组实例
    //数组去重
    return Array.from(new Set(array));
}

console.log(dedupe([1,1,2,2,2,3,4,5]));


//Map
let map3 = new Map()
map3.set('name','张三')
map3.set('age',18)
console.log(map3.get('name'))
console.log(map3.has('name'))
console.log(map3.size)
map3.delete('name')
console.log(map3.has('name'))
map3.clear()
console.log(map3.size)

let map2 = new Map([
    ['name','张三'],
    ['age',18]
])

for (let key of map2.keys()){
    console.log(key)
}

for (let value of map2.values()){
    console.log(value)
}

for (let item of map2.entries()){
    console.log(item[0],item[1])
}
//遍历对象
map2.forEach((value,key) => {
    console.log(key,value)
})

//WeakMap
let key1 = {
    name:'张三'
}

let key2 = {
    age:18
}

let weakmap = new WeakMap()

weakmap.set(key1,'张三')
weakmap.set(key2,18)

console.log(weakmap.get(key1))
console.log(weakmap.get(key2))

key1 = null
console.log(weakmap.get(key1))