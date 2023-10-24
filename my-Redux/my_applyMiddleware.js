// 直接把前面的结构拿过来
export default function applyMiddleware(middleware) {
    function enhancer(createStore) {
      function newCreateStore(reducer) {
        const store = createStore(reducer);
        
        // 将middleware拿过来执行下，传入store
        // 得到第一层函数
        const func = middleware(store);
        
        // 解构出原始的dispatch
        const { dispatch } = store;
        
        // 将原始的dispatch函数传给func执行
        // 得到增强版的dispatch
        const newDispatch = func(dispatch);
        
        // 返回的时候用增强版的newDispatch替换原始的dispatch
        return {...store, dispatch: newDispatch}
      }
      
      return newCreateStore;
    }
    
    return enhancer;
  }