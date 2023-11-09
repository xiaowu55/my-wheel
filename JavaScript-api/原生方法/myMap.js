/*
map(callbackFn)
map(callbackFn, thisArg)

fn传入element，index，arrar,
thisArg
返回一个新数组，每个元素都是回调函数的返回值
*/

Array.prototype.myMap = function(fn,context){
    var arr = Array.prototype.slice.call(this)
    var arrMap = []
    for(var i=0;i<arr.length;i++){
        arrMap.push(fn.call(context,arr[i],i,this))
    }
    return arrMap
} 
