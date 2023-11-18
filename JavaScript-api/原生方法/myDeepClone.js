// 方法一 JSON.stringify  缺点是会忽略undefined、symbol、函数
const obj = {
    name: 'A',
    name1: undefined,
    name3: function() {},
    name4:  Symbol('A')
}
const newobj = JSON.parse(JSON.stringify(obj))

console.info(newobj)

// 循环递归
function deepClone(obj,hash=new WeakMap()){
    if(obj===null)return obj //如果是null或者undefined就不进行拷贝操作
    if(obj instanceof Date)return new Date(obj)
    if(obj instanceof RegExp)return new RegExp(obj)
    // 可能是对象或者普通的值 如果是函数的话是不需要深拷贝
    if(typeof obj!=='object')return obj
    // 是对象就需要深拷贝
    if(hash.get(obj))return hash.get(obj)
    let cloneObj = new obj.constructor()
    // 找到的是所属类型上的constructor，而原型上的constructor指向的是类本身
    hash.set(obj,cloneObj)
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            cloneObj[key] = deepClone(obj[key],hash)
        }
    }
    return cloneObj
}