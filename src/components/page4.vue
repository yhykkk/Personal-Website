<template>
  <div class="content">
    <div class="title">
      <h3>My Blog</h3>
      <h1>Latest Posts</h1>
    </div>
    <header>
      <nav>
        <a class="nav-items" @click="$router.push('page1')">Home</a>
        <a class="nav-items" @click="$router.push('page2')">About</a>
        <a class="nav-items active" @click="$router.push('page4')">Blogs</a>
        <a class="nav-items" @click="$router.push('page5')">Gallery</a>
        <a class="nav-items" @click="$router.push('../')">Log out</a>
      </nav>
    </header>
    <div class="blog-list">
      <!-- 遍历 posts 数组 -->
      <div class="blog-post" v-for="post in posts" :key="post.slug" @click="goToPost(post.slug)">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
      </div>
    </div>
    
    <div class="cta">
      <button @click="loadMore">
        Load More
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      posts: [],
      image1: new URL('../assets/pic4.jpg', import.meta.url).href,
      image2: new URL('../assets/home2.jpg', import.meta.url).href,
      image3: new URL('../assets/home.jpg', import.meta.url).href,
      image4: new URL('../assets/figure4.jpg', import.meta.url).href,
    };
  },
  created() {
    // 动态导入 ../blogs 文件夹下的所有 Markdown 文件
    const modules = import.meta.glob('../blogs/*.md');
    // modules 为一个对象，键为文件路径，值为导入函数
    Promise.all(
      Object.entries(modules).map(async ([path, resolver]) => {
        const mod = await resolver();
        // 假设 Markdown 文件通过 vite-plugin-md 转换后会将 frontmatter 放在 mod.metadata 中
        const slug = path.split('/').pop().replace('.md', '');
        return {
          slug,
          title: mod.metadata?.title || slug,
          excerpt: mod.metadata?.excerpt || '点击阅读更多...',
        };
      })
    ).then((posts) => {
      // 可以对 posts 排序，比如按照日期倒序（需要在 metadata 中定义 date）
      this.posts = posts;
    });
  },
  methods: {
    goToPost(slug) {
      // 假设你已经在路由中配置了 BlogDetail 组件，并使用 slug 作为参数
      this.$router.push({ name: 'BlogDetail', params: { slug } });
    },
    loadMore() {
      // 如果有分页加载的需求，可以在这里实现加载更多博客逻辑
      console.log('加载更多博客');
    }
  }
};
</script>

<style scoped>
.content {
  position: relative;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
}
.title {
  text-align: center;
  margin-bottom: 40px;
}
.title h3 {
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 5px;
  color: #333;
}
.title h1 {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 10px;
  color: #7e7fc0;
  margin: 10px 0;
}
header {
  margin-bottom: 20px;
}
nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 5%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}
.nav-items {
  font-size: 18px;
  font-weight: 500;
  color: rgb(53, 53, 53);
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.nav-items.active, .nav-items:hover {
  background-color: #7e7fc0;
  color: white;
}
.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 40px 0;
}
.blog-post {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s;
}
.blog-post:hover {
  transform: translateY(-5px);
}
.blog-post h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}
.blog-post p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}
.cta {
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  color: rgb(53, 53, 53);
}
</style>
