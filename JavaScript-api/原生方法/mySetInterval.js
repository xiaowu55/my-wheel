/*
要点：使用setTimeout实现setInterval
1. 记录返回值清除
2. 初次调用Interval，然后再Interval里面实现对函数的Interval调用
*/

function mysetInterval(func,delay){
    let timer = null
    const interval = () =>{
        func()
        timer = setTimeout(func,delay)
    }

    setTimeout(interval,delay)

    return {
        concel:()=>{
            clearTimeout(timer)
        }
    }
};

// 测试
//传进一个console.log的函数，解构出cancel方法
// const { cancel } = mysetInterval(() => console.log(888),1000)
// setTimeout(()=>{
//   cancel()
// },4000)
