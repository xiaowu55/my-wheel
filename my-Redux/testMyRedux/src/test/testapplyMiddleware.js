// import {  createStore,applyMiddleware } from 'redux'
import  createStore  from "../../../my_createStoreV2";
import applyMiddleware from '../../../my_applyMiddleware'


export default function testapplyMiddleware() {
    function logger(store) {
        return function (next) {
            return function (action) {
                console.group(action.type);
                console.info('dispatching', action);
                let result = next(action);
                console.log('next state', store.getState());
                console.groupEnd();
                return result
            }
        }
    }

    const initState = {
        milk: 0
    };

    function reducer(state = initState, action) {
        switch (action.type) {
            case 'PUT_MILK':
                return { ...state, milk: state.milk + action.count };
            case 'TAKE_MILK':
                return { ...state, milk: state.milk - action.count };
            default:
                return state;
        }
    }

    // 在createStore的时候将applyMiddleware作为第二个参数传进去
    const store = createStore(
        reducer,
        applyMiddleware(logger)
    )
    // subscribe其实就是订阅store的变化，一旦store发生了变化，传入的回调函数就会被调用
    // 如果是结合页面更新，更新的操作就是在这里执行
    store.subscribe(() => console.log(store.getState()));

    // 将action发出去要用dispatch
    store.dispatch({ type: 'PUT_MILK', count: 1 });    // milk: 1
    store.dispatch({ type: 'PUT_MILK', count: 1 });    // milk: 2
    store.dispatch({ type: 'TAKE_MILK', count: 1 });   // milk: 1


}