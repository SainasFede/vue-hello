const { createApp } = Vue;

createApp({
  data(){
    return{
      nome: '',
      img: '/img/',
      imgChange: 'chihuahua.jpg',
      colorText: ''
    }
  },
  methods:{
    changeImg(newImg){
      this.imgChange = newImg
    },
    changeColor(){
      this.colorText = 'red'
    }
  }
}).mount('#app')