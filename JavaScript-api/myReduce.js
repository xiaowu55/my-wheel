Array.prototype.myReduce = function (fn,initalValue) {
    var arr = Array.prototype.slice.call(this)
    var res,startIndex
    res = initalValue?initalValue:0
    startIndex = initalValue?1:0
    for(var i=startIndex;i<arr.length;i++){
        res = fn.call(null,res,arr[i],i,this)
    }
    return res
}