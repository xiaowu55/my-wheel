var obj = {
    age: 18,
    nature: ['smart', 'good'],
    names: {
        name1: 'fx',
        name2: 'xka'
    },
    love: function () {
        console.log('fx is a great girl')
    }
}

// 方法一
function shallowClone(obj){
    const newObj = {}
    for(let prop in obj){
        if(obj.hasOwnProperty(prop)){
            newObj[prop] = obj[prop]
        }
    }
    return newObj
}

// 方法二 Object.assign

const newObj = Object.assign({},obj)

// 方法三 拓展运算符
const fxArr = ["One", "Two", "Three"]
const fxArrs = [...fxArr]
