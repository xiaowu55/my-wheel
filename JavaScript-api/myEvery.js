/* */

Array.prototype.MyEvery = function(callback){
    let result = true
    for(let i=0;i<this.length;i++){
        if(!result)break
        result = callback(this[i],i,this)&&result
    }
    return result
}

// const players = [
//     { name: '科比', num: 24 },
//     { name: '詹姆斯', num: 23 },
//     { name: '保罗', num: 3 },
//     { name: '威少', num: 0 },
//     { name: '杜兰特', num: 35 }
// ]
// console.log(players.MyEvery(item => item.num >= 23)) // false
// console.log(players.MyEvery(item => item.num >= 0)) // true
