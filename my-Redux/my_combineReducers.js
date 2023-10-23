export function combineReducers(reducerMap){
    const reducerKeys = Object.keys(reducerMap)  //获取参数中的键值拿出来

    //  返回值是一个普通的reducer函数
    const reducer = (state={},action)=>{
        const newState = {}

        for(let i=0;i<reducerKeys.length;i++){
            // reducerMap里面每个键的值都是一个reducer，我们把它拿出来运行下就可以得到对应键新的state值
            // 然后将所有reducer返回的state按照参数里的可以组装好
            // 最后再返回组装好点newState就行
            
            const key = reducerKeys[i] //获取reducer的键
            const currentReducer = reducerMap[key] //获得reducer这个函数
            const prevState = state[key]  // 获取原先state的值
            newState[key] = currentReducer(prevState,action)  // 组装并放入之前新建的对象中
        }

        return newState //返回为reducer

    }
    return reducer
}