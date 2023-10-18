function myDebounce(fn,delay){
    let timer = null
    return (...args)=>{
        clearTimeout(timer)
        timer = setTimeout(() => { 
            fn.apply(this,args)
         },delay)
    }
}

/*
防抖的核心在于
1.如果在定时器的时间内再次触发，就会清除计时器并且新建一个计时器
*/