// const data = {
//     name:'zhangsan',
//     age:20
// }
const data = [1,2,3,4,5]
const proxyData = new Proxy(data,{
    get(target, key, receiver){
        const result = Reflect.get(target, key, receiver)
        console.log('get',key)
        return result // 返回结果
    },
    set(target, key, val, receiver){
        const result = Reflect.set(target,key,val,receiver)
        console.log('set',key, val)
        console.log('result',result)
        return result // 是否设置成功
    },
    deleteProperty(target, key){
        const result = Reflect.deleteProperty(target, key)
        console.log('delete property',key)
        console.log('result',result)
        return result // 是否删除成功
    }
})