/* 
发布订阅模式
1.使用对象来储存
2. subscribe：将回调储存到数组中
3. publish：执行回调
*/
class PubSub {
    constructor(){
        this.events = {};
    }

    subscribe(event, callback){
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    publish(event, ...args){
        const subscribedEvents = this.events[event];

        if (subscribedEvents) {
            for (let i = 0; i < subscribedEvents.length; i++) {
                const callback = subscribedEvents[i];
                callback.call(this, ...args);
            }
        }
    }

    unsubscribe(event, callback){
        const subscribedEvents = this.events[event];

        if (subscribedEvents) {
            this.events[event] = subscribedEvents.filter(cb => cb !== callback);
        }
    }
}
