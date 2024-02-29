class Router {
    constructor(){
        this.routes = {}
        this.current = ''

        //监听路由change调用对应的路由回调
        window.addEventListener('load',this.refresh,false)
        window.addEventListener('hashchange',this.refresh,false)
    }
    route(path,callback){
        this.routes[path] = callback
    }
    push(path){
        this.routes[path] && this.route[path]()
    }
}