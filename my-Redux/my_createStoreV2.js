export default function createStore(reducer, enhancer) {
    // 先处理enhancer   
    // 如果enhancer存在并且是函数
    // 我们将createStore作为参数传给他
    // 他应该返回一个新的createStore给我
    // 我再拿这个新的createStore执行，应该得到一个store
    // 直接返回这个store就行
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer === 'function') {
            const newCreateStore = enhancer(createStore);
            const newStore = newCreateStore(reducer);
            return newStore;
        }
    }

    let state
    let listeners = []

    function subscribe(callback) {
        listeners.push(callback)
    }

    function dispatch(action) {
        state = reducer(state, action)

        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i]
            listener()
        }
    }

    function getState() {
        return state
    }

    const store = {
        subscribe,
        dispatch,
        getState
    }

    return store


}