/* 
节流：
1. 在定时器的时间范围内再次触发，不予理睬，等当前定时器完成，启动下一个定时器
*/

function myThrottle(fn,delay = 500){
    let flag = true // 能否启动下一个定时器
    return (...args)=>{
        if(!flag)return 
        flag = false
        setTimeout(() => {
            fn.apply(this,args)
            flag = true
        }, delay);
    }
}