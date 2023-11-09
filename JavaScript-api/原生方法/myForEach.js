/*
要点在于
理解传入的元素参数

*/


Array.prototype.myForEach = function (callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}

const players = [
    { name: '科比', num: 24 },
    { name: '詹姆斯', num: 23 },
    { name: '保罗', num: 3 },
    { name: '威少', num: 0 },
    { name: '杜兰特', num: 35 }
]

// players.myForEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })