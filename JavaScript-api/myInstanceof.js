function myInstanceof(left,right){
    let proto = Object.getPrototypeOf(left)
    while(true){
        if(proto===null)return false
        if(proto===right.prototype)return true
        proto = Object.getPrototypeOf(proto)
    }
}

/* 
instanceof的原理是
1.原型链向上查找
*/