<template>
  <div class="login" :style="{ backgroundImage: `url(${imagePath})`,backgroundPositionX: `${backgroundX}px`, backgroundPositionY: `${backgroundY}px` }">
        <section id="login-form">
        <h1>welcome</h1>
        <div class="input-wrap in1">
            <input type="text" placeholder="your account" spellcheck="false" v-model="zh" required>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="input-wrap in2">
            <input type="password" placeholder="your password" spellcheck="false" v-model="mm" required>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="rem">
                <p>
                    <input type="checkbox">Remember me
                </p>
            <p>  
                <a href="#">Forgot password?</a>
            </p>
            </input>
        </div>

        <button @click="form_login">Login</button>

        <p class="reg">
            Don't have an account?
            <a href="#">Register</a>
        </p>

    </section>
    
</div>
    

  </template>
  
  <script>

  
  import image from '../assets/login.jpg'
  export default{
  name: 'App',
  props:{
    imagePath:{
      type:String,
      default:image
    },
    },
  methods:{
    form_login(){
      if (this.zh === '' || this.mm === '') {
        alert('账号或密码不能为空');
        return false;
      } else if (this.zh !== 'yhykkk' || this.mm !== '666666') {
        alert('账号或密码错误');
        return false;
      }
      alert('登录成功！');
      this.$router.push('/home');
    },
    handleMouseMove(event) {
      this.backgroundX = -event.clientX / 80;
      this.backgroundY = -event.clientY / 120;
 },
},
    data(){
        return{
            backgroundX:0,
            backgroundY:0,
            zh:'',
            mm:''
        };
    },
    mounted() {
    window.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  },

  }
  </script>

  <style>
    @font-face {
        font-family: 'Poppins';
        src: url('../../font.ttf') format('truetype');
        }
    .login {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family:"Poppins", sans-serif;
    }

</style>
  