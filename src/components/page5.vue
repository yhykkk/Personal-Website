<template>
    <div class="content">
      <header>
    <nav>
      <a class="nav-items"  @click="$router.push('page1')">Home</a>
      <a class="nav-items"  @click="$router.push('page2')">About</a>
      <a class="nav-items" @click="$router.push('page4')">Blogs</a>
      <a class="nav-items active" @click="$router.push('page5')">Gallery</a>
      <a class="nav-items" @click="$router.push('../')">Log out</a>
    </nav>
  </header>
      <img :src="slides[currentSlide].src" alt="background" class="back-2" :style="{ transform: `translateX(${translateX}%)` }">
  
      <div class="slider">
        <i class="fa-solid fa-chevron-left" @click="prevSlide"></i>
        <i class="fa-solid fa-chevron-right" @click="nextSlide"></i>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Page1",
    data() {
      return {
        currentSlide: 0,
        slides: [
        {src:new URL('../assets/pic5.jpg', import.meta.url).href} ,
        {src:new URL('../assets/gallery1.png', import.meta.url).href} ,
        {src:new URL('../assets/gallery2.png', import.meta.url).href} ,
        {src:new URL('../assets/gallery3.png', import.meta.url).href} ,
        {src:new URL('../assets/gallery4.png', import.meta.url).href} ,
      ],
      };
    },

    computed: {
    translateX() {
      return -this.currentSlide * 100
    }
  },

  methods: {
    nextSlide() {
      this.transitionName = 'slide-next'
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prevSlide() {
      this.transitionName = 'slide-prev'
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    }
  }
  };
  </script>
  
  <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
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
  animation: zoomOut 1.2s ease-out forwards;
  z-index: 999
}
.slider i {
  padding: 0 5%;
  font-size: 36px;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer; 
  transition: all 0.3s;
  position: relative; 
}

.slider i:hover {
  color: rgba(255, 255, 255, 0.8);
  transform: scale(1.2);
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


body {
  animation: backgroundImage 1.6s ease-out forwards;
}


nav {
  animation: topIn 1.2s ease-out forwards;
}


.back-2 {
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
}

/* 方向感知动画 */
.slide-next-enter-active {
  animation: slideInRight 0.8s;
}
.slide-prev-enter-active {
  animation: slideInLeft 0.8s;
}


.content {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.slider-container {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top; 
  top: 0; 
  left: 0;
  transform: translateX(var(--translate-x)); /* 使用CSS变量更规范 */
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
}

.back-2 {
  position: absolute;
  width: 100%;
  object-fit: cover;

  will-change: transform;
  bottom: 100px; 
  transform-style: preserve-3d; 
}

@media (max-width: 768px) {
  .back-2 {
    object-position: center center; 
  }
}
  </style>
  