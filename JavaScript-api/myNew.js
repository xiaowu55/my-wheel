function myNew (fn,...args){
    let instance = Object.create(fn.prototype)
    let res = fn.apply(instance,args)
    return typeof res==='object'?res:instance
}
/*
new一个函数的过程
1.创建一个全新的对象
2.这个全新的对象prototype指向构造函数的原型对象
3.执行构造函数
4.如果返回值为object就返回这个对象，否则返回新对象
*/