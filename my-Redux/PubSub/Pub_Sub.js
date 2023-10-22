/**
 * My-Redux前置学习
 * 发布订阅模式
 */
class PubSub{
    constructor(){
        // 使用一个对象存放所有的订阅消息
        // 每一个消息对应一个数组，数组结果如下
        // {
        //     'event1':[callback1,callback2]
        // }
        this.events = {}
    }
    subscribe(event,callback){
        if(this.events[event]){
            // 如果有人订阅过这个消息，直接往里面加就可以了
            this.events[event].push(callback)
        }else{
            // 没人订阅过就存放进去
            this.events[event]=[callback]
        }
    }

    publish(event,...args){
        //取出所有订阅者的回调执行
        const subscribeEvents = this.events[event]
        if(subscribeEvents&&subscribeEvents.length){
            subscribeEvents.foreach(callback=>{
                callback.call(this,...args)
            })
        }
    }

    unsubscribe(event,callback){
        // 删除某个订阅，保留其他订阅
        const subscribeEvents = this.events[event]

        if(subscribeEvents&&subscribeEvents.length){
            this.events[event] = this.events[event].fillter(callback =>callback!==callback)
        }
    }
}