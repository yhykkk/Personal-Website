<template>
    <div class="content">
      <div class="title">
        <h3>The Land of Serene Beauty</h3>
        <h1>Kerala</h1>
      </div>
      <header>
    <nav>
      <a class="nav-items active">Home</a>
      <a class="nav-items"  @click="$router.push('page2')">About</a>
      <a class="nav-items" @click="$router.push('page4')">Blogs</a>
      <a class="nav-items" @click="$router.push('page5')">Gallery</a>
      <a class="nav-items" @click="$router.push('../')">Log out</a>
    </nav>
  </header>
      <img :src="image2" alt="background" class="back-2">
      <div class="info-wrap">
        <p>
          This is the homepage of yhykkk
        </p>
      </div>
      <section class="sec">
        <a href="page2">
            <div class="part1 pt">
                <div class="imghid"></div>
                <div class="txt">
                    <h1>嗨咯呀</h1>
                    <p>这里是yhykkk的主页<br><br>
                    我就读于电子科技大学的电子信息专业是一个爱好电子和软件设计开发的大二学生<br><br>
                    业余会提交一些嵌入式开发,数字IC设计和一些软件学习项目
                    平时会尽量更新一些自己写的博客希望对大家有帮助
                    </p>
                </div>
            </div>
        </a>
    </section>
      <div class="type-wrap">
      <v-row align="center">
            <v-col cols="12" md="8">
              <typewriter class="ma-3 d-flex align-center justify-center" style="min-height: 200px;"></typewriter>
            </v-col>
            <v-col cols="12" md="4" align="center"></v-col>
        </v-row> 
      </div>
      <div class="cta">
        <button>
          Explore More
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
  
      <div class="slider">
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </template>
  
  <script>
  import typewriter from '../components/typewriter.vue';
  export default {
    name: "Page1",
    components: { typewriter },
    data() {
      return {
        image1: new URL('../assets/pic1.jpg', import.meta.url).href,
        image2: new URL('../assets/pic2.jpg', import.meta.url).href,
        image3: new URL('../assets/home.jpg', import.meta.url).href,
        image4: new URL('../assets/figure2.jpg', import.meta.url).href,
      };
    }
  };
  </script>
  
  <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
}

body {
  background-image: url(img/bac\ 4.png);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  overflow: hidden;
}

body::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(transparent 50%, rgb(0, 0, 0));
}

/* Background-images */

.content img {
  position: absolute;
  bottom: -12%;
}

header {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 5%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

nav a {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  color: rgb(53, 53, 53);
  width: 110px;
  text-align: center;
  padding: 15px 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.active {
  background-color: #7e7fc0;
  color: white;
}

nav a:hover {
  background-color: #322aa4;
  color: white;
}

nav:hover > a:not(:hover) {
  background-color: transparent;
  color: rgb(53, 53, 53);
}

.title {
  position: absolute;
  top: 40%;
  right: 50%;
  transform: translate(50%, -50%);
  
}

.title h3 {
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 15px;
  color: white;
  text-align: center;
}

.title h1 {
  font-size: 15rem;
  font-weight: 800;
  letter-spacing: 50px;
  text-transform: uppercase;
  color: white;
  text-align: center;
  margin: -20px 0;
}

p {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  width: 70%;
  text-align: center;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.type-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  z-index: 1;
}

.info-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 18%;
  z-index: 1;
}

.cta {
  position: absolute;
  bottom: 8%;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
}

.cta button {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  height: 50px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
  cursor: pointer;
}

.cta button:hover {
  background-color: rgba(255, 255, 255, 0.8);
  color:rgb(53, 53, 53);
}

.slider {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.slider i {
  padding: 0 5%;
  font-size: 36px;
  color: rgba(255, 255, 255, 0.4);
}

/* Animations */
@keyframes bottomIn {
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0);
  }
}

.back-1 {
  animation: bottomIn 1s ease-out forwards;
}

.back-2 {
  animation: bottomIn 1.3s ease-out forwards;
}

.back-3 {
  animation: bottomIn 1.5s ease-out forwards;
}

@keyframes bottomInText {
  from {
    transform: translateY(500px);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

h3 {
  animation: bottomInText 1s ease-out forwards;
}

h1 {
  animation: bottomInText 1.2s ease-out forwards;
}

p {
  animation: bottomInText 1.2s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

button {
  animation: bottomInText 1.2s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

@keyframes backgroundImage {
  from {
    background-position: top;
  }
  to {
    background-position: 50% 14%;
  }
}

body {
  animation: backgroundImage 1.6s ease-out forwards;
}

@keyframes topIn {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

nav {
  animation: topIn 1.2s ease-out forwards;
}

@keyframes zoomOut{
  from {
    transform: scale(1.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.slider {
  animation: zoomOut 1.2s ease-out forwards;
}




.sec{
    position: absolute;
    bottom: 75px;
    left: 1000px;
    height: 100vh;
    width: 100vw;
    scroll-snap-align: start;
}

.pt{
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 500px;
    float: left;
    margin: 150px 0px 0px 105px;
    background: rgba(244, 246, 247, 0.356);
    box-shadow: 0 0 15px rgba(59, 73, 95, 0.76);
    border-radius: 15px;
    overflow: hidden;
    scroll-snap-align: start;
    transition: all 0.5s ease 0s;
}
.pt:hover{
    cursor: pointer;
    transform: scale(1.05);
}

.imghid{
    overflow: hidden;
}
.part1 .img{
    background-image : "figure1";
}



.pt .txt{
    height: 500px;
    width: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: auto;
    
}

.pt .txt h1{
    text-align: center;
    font-size: 3em;
    color: rgb(28, 44, 68);
    height: 30px;
    line-height: 50px;
}

.pt .txt p{
    width: 300px; /* 或者其他合适的宽度 */
    margin: auto; /* 确保容器本身在父容器中居中 */
    display: flex;
    flex-direction: column;
    align-items: center; /* 垂直居中对齐 */
    font-size: 1.2em;
    color:rgb(248, 246, 246);
}

  </style>
  