import Vue from 'vue'
// import App from './App.vue'
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  props:["item"],
  template: '<li>{{item}}</li>'
})
var app = new Vue({
  el: '#app',
  data:{
    msg:"hello word!",
    seen:true,
    hiden:false,
    items:[
      0,1,2,3,4,5,6,7,89,10,11
    ],
    firstName: 'Foo',
    lastName: 'Bar',
    // fullName: 'Foo Bar'
  },
  methods:{
    reverseMsg:function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  },
  // watch:{
  //   firstName:function (val) {
  //     this.fullName = val + ' ' + this.lastName
  //   },
  //   lastName:function (val) {
  //     this.fullName = this.firstName + ' ' + val
  //   }
  // },
  computed: {
    reverseMsg1:function () {
      return this.msg.split('').reverse().join('')
    },
    fullName:function () {
      return this.firstName+" "+this.lastName;
    }
  },
  beforeCreate:function () {
    console.log('beforeCreate',1)
  },
  create:function () {
console.log('create',2)
  },
  beforeMount:function () {
console.log('beforeMount',3)
  },
  mounted:function () {
console.log('mounted',4)
  },
  beforeDestory:function () {
console.log('beforeDestory',5)
  },
  destoryed:function () {
console.log('destoryed',6)
  }
  // render: h => h(App)
})
