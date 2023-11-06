Array.prototype.MyFindIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i],i,this))return i
    }
    return -1
}


// const players = [
//     { name: '科比', num: 24 },
//     { name: '詹姆斯', num: 23 },
//     { name: '保罗', num: 3 },
//     { name: '威少', num: 0 },
//     { name: '杜兰特', num: 35 }
// ]

// console.log(players.MyFindIndex(item => item.name === '科比')) // 0
// console.log(players.MyFindIndex(item => item.name === '安东尼')) // -1

