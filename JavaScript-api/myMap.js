Array.prototype.myMap = function(fn,context){
    var arr = Array.prototype.slice.call(this)
    var arrMap = []
    for(var i=0;i<arr.length;i++){
        arrMap.push(fn.call(context,arr[i],i,this))
    }
    return arrMap
}