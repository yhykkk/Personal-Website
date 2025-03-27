<template>
    <div class="content">
      <div class="title">
        <h3>The Land of Serene Beauty</h3>
        <h1>Kerala</h1>
      </div>
      <div class="about-content">
      <header>
    <nav>
      <a class="nav-items" @click="$router.push('page1')">Home</a>
      <a class="nav-items active" @click="$router.push('page2')">About</a>
      <a class="nav-items" @click="$router.push('page4')">Blogs</a>
      <a class="nav-items" @click="$router.push('page5')">Gallery</a>
      <a class="nav-items" @click="$router.push('../')">Log out</a>
    </nav>
  </header>
      <img :src="image2" alt="background" class="back-2">
          <!-- 个人简介 -->
    <section class="profile">
      <div class="profile-pic">
        <img :src="image4" alt="Profile Picture" />
      </div>
      <div class="profile-text">
        <h1 >About Me</h1>
        <p>
          我是yhykkk，一名个人开发者，热爱探索新技术，设计有意思的小项目。欢迎了解我的软件技能与兴趣爱好！
        </p>
      </div>
    </section>

    <!-- 软件技能 -->
    <section class="skills">
      <h2>Software Skills</h2>
      <div class="skills-grid">
        <div class="skill" v-for="skill in skills" :key="skill.name">
          <i :class="skill.icon"></i>
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </section>

    <!-- 兴趣爱好 -->
    <section class="hobbies">
    <h2>Platforms</h2>
    <div class="hobbies-grid">
      <div class="hobby" v-for="platform in platforms" :key="platform.name">
        <a :href="platform.url" target="_blank" rel="noopener noreferrer">
          <i :class="platform.icon"></i>
          <p>{{ platform.name }}</p>
        </a>
      </div>
    </div>
  </section>
  </div>
   
  
      <div class="slider">
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Page1",
    data() {
      return {
        image1: new URL('../assets/pic1.jpg', import.meta.url).href,
        image2: new URL('../assets/home2.jpg', import.meta.url).href,
        image3: new URL('../assets/home.jpg', import.meta.url).href,
        image4: new URL('../assets/figure4.jpg', import.meta.url).href,
        // 个人简介图片，可替换为自己的头像
      profileImage: new URL('../assets/profile.jpg', import.meta.url).href,
      // 示例技能数组（注意：需在项目中引入 FontAwesome 库或替换成其他图标方案）
      skills: [
        { name: 'C', icon: 'fab fa-c' },
        { name: 'Vue.js', icon: 'fab fa-vuejs' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'HTML5', icon: 'fab fa-html5' }
      ],
      // 示例兴趣爱好数组
      platforms: [
        { name: 'Github', icon: 'fab fa-github', url: 'https://github.com/yhykkk' },
        { name: 'Bilibili', icon: 'fab fa-bilibili', url: 'https://b23.tv/OoV97Fl' },
        { name: 'Steam', icon: 'fab fa-steam', url: 'https://steamcommunity.com/your-profile' },
        { name: 'Wechat', icon: 'fab fa-weixin', url: 'https://weixin.qq.com/' }
      ]
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

.about-content {
  position: relative;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
}

/* 导航栏样式 */
header {
  margin-bottom: 20px;
}

/* 个人简介区域 */
.profile {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  animation: fadeInUp 1s ease-out forwards;
}
.profile-pic img {
  position: relative; /* 或者直接不设置 position */
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #7e7fc0;
}
.profile-text h1 {
  position: relative;
  left:560px;
  top:80px;
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 10px;
  color: #e0dbdb;
}
.profile-text p {
  position: relative;
  left:700px;
  top:100px;
  font-size: 1.2rem;
  color: #f7f4f4;
  line-height: 1.6;
}

/* 软件技能区域 */
.skills {
  position: relative;
  top:100px;
  margin-bottom: 40px;
  animation: fadeIn 1.2s ease-out forwards;
}
.skills h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
}
.skill {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.skill:hover {
  transform: translateY(-5px);
}
.skill i {
  font-size: 2rem;
  color: #7e7fc0;
  margin-bottom: 10px;
}
.skill p{
  position: relative;
  left:40px;
  color:#7e7fc0;
}

/* 兴趣爱好区域 */
.hobbies {
  position: relative;
  top:100px;
  animation: fadeIn 1.4s ease-out forwards;
}
.hobbies h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}

.hobbies p{
  position: relative;
  left:50px;
  color:#7e7fc0;
}

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
}
.hobby {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.hobby:hover {
  transform: translateY(-5px);
}
.hobby i {
  font-size: 2rem;
  color: #7e7fc0;
  margin-bottom: 10px;
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

  </style>
  