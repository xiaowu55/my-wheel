Array.prototype.myFill = function(value,start=0,end=this.length-1){
    for(let i=start;i<end;i++){
        this[i]=value
    }
    return this
}
