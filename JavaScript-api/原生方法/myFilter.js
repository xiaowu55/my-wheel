/* */

Array.prototype.MyFilter = function (callback){
    const res = []
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this))res.push(this[i])
    }
    return res
}

// const players = [
//     { name: '科比', num: 24 },
//     { name: '詹姆斯', num: 23 },
//     { name: '保罗', num: 3 },
//     { name: '威少', num: 0 },
//     { name: '杜兰特', num: 35 }
// ]

// let res = players.MyFilter((item)=>item.num>10)
// console.log(res);