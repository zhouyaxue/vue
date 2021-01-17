const compiler = require('vue-template-compiler')

// 插值
// const template = `<p>{{message}}</p>`
// with(this){return _c('p',[_v(_s(message))])}  打印出了
// _c createElement
// h('p',{},[...]) 函数

// const template = `<p>{{flag ? message :'no message found'}}</p>`

// 属性和动态属性
// const template = `
//     <div id="div1" class="container">
//         <img :src="imgUrl"/>
//     </div>
// `

// 条件
// const template = `
//     <div>
//         <p v-if="flag === 'a'">A</p>
//         <p v-else>B</p>
//     </div>
// `

// 循环
// const template = `
//     <ul>
//         <li v-for="item in list" :key="item.id">{{item.title}}</li>
//     </ul>
// `

// 事件
// const template = `
//     <button @click="clickHandler">submit</button>
// `

// v-model
// 双向数据绑定
const template = `
    <input type="text" v-model="name">
`
// with(this){return _c('input',{directives:[{name:"model",rawName:"v-model",value:(name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(name)},on:{"input":function($event){if($event.target.composing)return;name=$event.target.value}}})}

// render 函数
// 返回 vnode

// 编译
const res = compiler.compile(template)
console.log(res.render)