
export function createStore(reducer,action){
    let state   // state记录所有状态
    let listeners = []  //保存所有注册的回调

    function subscribe(callback){
        listeners.push(callback) //subsribe就是将回调保存下来
    }

    // dishpactch就是把所有回调拿出来依次执行
    function dispatch(action){
        state = reducer(state,action)

        for(let i=0;i<listeners.length;i++){
            const listener = listeners[i]
            listener()
        }
    }

    function getState(){
        return state
    }

    const store = {
        subscribe,
        dispatch,
        getState
    }

    return store
}