// import { combineReducers, createStore } from 'redux'
import { createStore } from "../../../my_createStore";
import { combineReducers } from "../../../my_combineReducers";

function testCombineReducers(){
    const initMilkState = {
        milk: 0
    };
    function milkReducer(state = initMilkState, action) {
        switch (action.type) {
            case 'PUT_MILK':
                return { ...state, milk: state.milk + action.count };
            case 'TAKE_MILK':
                return { ...state, milk: state.milk - action.count };
            default:
                return state;
        }
    }
    
    const initRiceState = {
        rice: 0
    };
    
    
    function riceReducer(state = initRiceState, action) {
        switch (action.type) {
            case 'PUT_RICE':
                return { ...state, rice: state.rice + action.count };
            case 'TAKE_RICE':
                return { ...state, rice: state.rice - action.count };
            default:
                return state;
        }
    }
    
    // 使用combineReducers组合两个reducer
    const reducer = combineReducers({ milkState: milkReducer, riceState: riceReducer });
    
    let store = createStore(reducer);
    
    store.subscribe(() => console.log(store.getState()));
    
    // 操作🥛的action
    store.dispatch({ type: 'PUT_MILK', count: 1 });    // milk: 1
    store.dispatch({ type: 'PUT_MILK', count: 1 });    // milk: 2
    store.dispatch({ type: 'TAKE_MILK', count: 1 });   // milk: 1
    
    // 操作大米的action
    store.dispatch({ type: 'PUT_RICE', count: 1 });    // rice: 1
    store.dispatch({ type: 'PUT_RICE', count: 1 });    // rice: 2
    store.dispatch({ type: 'TAKE_RICE', count: 1 });   // rice: 1
        
}

export default testCombineReducers