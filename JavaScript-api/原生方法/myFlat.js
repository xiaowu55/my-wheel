Array.prototype.MyFlat = function(){
    let arr = this
    while(arr.some(item=>Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}