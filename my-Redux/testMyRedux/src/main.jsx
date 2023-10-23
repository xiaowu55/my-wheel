
// import { createStore } from 'redux';
import { createStore } from "../../my_createStore";

const initState = {
  milk: 0
};

function reducer(state = initState, action) {
  switch (action.type) {
    case 'PUT_MILK':
      return {...state, milk: state.milk + 1};
    case 'TAKE_MILK':
      return {...state, milk: state.milk - 1};
    default:
      return state;
  }
}

let store = createStore(reducer);

// subscribe其实就是订阅store的变化，一旦store发生了变化，传入的回调函数就会被调用
// 如果是结合页面更新，更新的操作就是在这里执行
store.subscribe(() => console.log(store.getState()));

// 将action发出去要用dispatch
store.dispatch({ type: 'PUT_MILK' });    // milk: 1
store.dispatch({ type: 'PUT_MILK' });    // milk: 2
store.dispatch({ type: 'TAKE_MILK' });   // milk: 1
