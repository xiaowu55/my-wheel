function myNew(fn, ...args) {
    let instance = Object.create(fn.prototype)
    let res = fn.apply(instance, args)
    return typeof res === 'object' ? res : instance
}
/*
new一个函数的过程
1.创建一个全新的对象
2.这个全新的对象prototype指向构造函数的原型对象
3.执行构造函数
4.如果返回值为object就返回这个对象，否则返回新对象
*/

function myNew(fn, ...args) {
    const obj = {}                                          // 1.创建一个全新的对象
    obj._proto_ = fn.prototype                              // 2.这个全新的对象prototype指向构造函数的原型对象
    let res = fn.apply(obj, args)                     // 3.执行构造函数
    return typeof res === 'object' ? res : obj              // 4.如果返回值为object就返回这个对象，否则返回新对象
}