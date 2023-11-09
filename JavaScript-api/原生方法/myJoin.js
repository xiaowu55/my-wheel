Array.prototype.myJoin = function(s=','){
    let str = ''
    for(let i=0;i<this.length;i++){
        str = i ===0 ? `${str}${this[i]}`: `${str}${s}${this[i]}`
    }
    return str
}
