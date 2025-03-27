# 基于vue框架的web前端开发

## 简介

是时候补一下前端的知识了

## html5学习

### 简介

html5是一种超文本标记语言，用来进行网页的开发，其基本元素是由尖括号组成的标签，这样的一套标签组合也叫做标记语言

### html的基础骨架

#### doctype声明

是网页的必备成分，位于网页的最前面，提前声明了网页的类型，可以避免浏览器出现怪异模式

```html
<!DOCTYPE html>
```



#### html标签

html元素定义了整个html文档，限定了文档的开始和结束点，并且将所需要的其他元素包裹在其中

```html
<!DOCTYPE html>
<html> </html>
```



#### head标签

head元素位于文档的头部，定义了文档的属性和一些信息，但是相关的内容并不直接展示给用户

```html
<head> </head>
```



#### body标签

body元素定义了文档的主体，包含了文档的所有内容，它会直接显示在页面中，也是用户可以直观看到的内容

```html
<body> </body>
```



#### title标签

title标签是`<head>`标签必须包含的部分，可定义文档的标题，有利于SEO优化

```html
<head>
    <title> </title>
</head>
```



#### meta标签

可以描述一个文档的属性，关键词等，``注意：meta为单标签！！``

例如用utf-8说明当前的编码格式为utf-8

```html
<meta charset="UTF-8">
```



### 标题标签

#### 标题的应用

html由``<h1>``到``<h6>``定义，一次为一级标题到六级标题

#### align属性

html可以由align来定义属性依次为left , center, right

```html
<h1 align="center">一级标题</h1>
    <h2 align="left">二级标题</h2>
    <h3>三级标题</h3>
    <h4>四级标题</h4>
    <h5>五级标题</h5>
    <h6>六级标题</h6>
```



### 段落

#### 段落标签

可以将文档划分为多个段落，段落之间存在间隔

```html
<p>hello world</p>
```



#### 换行标签

可以实现段落内的换行，行与行之间不存在间隔

```html
<p>
    hello<br>
    world
</p>
```



#### 水平线标签

水平线标签用于构建一条分割线，可以自定义一些属性

其中**size**定义为宽度，**width**定义为长度，这两个标签推荐使用px量化

```html
<hr color="red" size="5" align="left" width="50%">
<hr color="red" size="5px" align="left" width="500px">
```



### 图片标签

图片标签的使用类似于md，不过具有几个特殊的属性

``src``定义为图片的查找路

``alt``无法正常加载图片时候，显示的替代的标签信息

``width``可以调整图片的宽度，一般只用指定width或者height以保证图片的美观性

``title``是鼠标移动到指定的位置时候，图片显示的文字

```html
<img src="your path" alt="一张图片" width="200px" title="your name">
```





### 超文本标签

超文本链接，用于链接，需要注意定义``href``来指定跳转路径

也可以链接自己想要链接的图片

```html
<a href="https://tse2-mm.cn.bing.net/th/id/OIP-C.z0bU-yfP-mXSiywak9Z7UgHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.5&pid=1.7">好看的图片</a>
```



### 文本标签

相比于段落，文本就是单一的word和词组的关系

| 标签         | 作用       |
| ------------ | ---------- |
| ``<em>``     | 着重文字   |
| ``<b>``      | 加粗文字   |
| ``<i>``      | 斜体文字   |
| ``<u>``      | 文字下划线 |
| ``<strong>`` | 加强文字   |
| ``<span>``   | 无意义格式 |

```html
<em>着重文字</em>
<i>斜体文字</i>
<b>加粗文字</b>
<strong>加重语气</strong>
<del>删除文字</del>
<u>下划线</u>
<span>无特殊含义</span>
```



### 列表标签

#### 有序列表

创建出的列表为有序排列的列表，可以根据type来指定列表的排列表头，列表可以进行列表的嵌套，有序列表始于``<ol>``标签，列表项始于``<li>``标签

**type属性**：1：为数字顺序标号   a/A：以字母顺序标号  i/I：以罗马数字标号

```html
<ol type="i">
    <li>int<ol type="1">
        <li>1</li>
        <li>2</li>
    </ol></li>
    <li>float</li>
    <li>str</li>
    <li>double</li>
</ol>
```



#### 无序列表

无序列表相比于有序列表更加的常用，同样可以指定type作为相应的格式

**type属性：**disk为实心圆点，circle为空心圆点，square为方块，none为不显示

```html
<ul type="disk">
    <li>intel <ul type="circle">
        <li>intel core i5</li>
        <li>intel core i7</li>
        </ul>
    </li>
    <li>amd <ul type="square">
        <li>amd core i5</li>
        </ul>
    </li>
</ul>
```



### 表格标签

#### 表格的生成

表格由一对``<table>``标签包裹，行起始标签为``<tr>``，列起始标签``<td>``

```html
<body>
    <table>
        <tr>
            <td>bi</td>
            <td>li</td>
            <td>bi</td>
        </tr>
        <tr>
            <td>bi</td>
            <td>li</td>
            <td>bi</td>
        </tr>
    </table>
</body>
```



列表也可以由快捷键生成

```html
table>tr*行>td*列{初始文本内容}
```

​	

列表具有的独特，可配置的属性     **border:**管理边框像素宽度，默认为0      **width**和**height**可配置表格长宽

```html
<table border="1" height="50px" width="200px">
```



#### 表格的合并

表格的合并分为行合并（横向合并单元格)**colspan**和列合并（纵向合并单元格)**rowspan**

但是注意合并表格的时候需要删除被合并的表项，上下合并保留上，左右合并保留左

```html
<table border="1">
    <tr>
        <td colspan="2">单元</td>
        <td>单元</td>
        <td>单元</td>
        <td>单元</td>
    </tr>
    <tr>
        <td rowspan="2">单元</td>
        <td>单元</td>
        <td>单元</td>
        <td>单元</td>
        <td>单元</td>
    </tr>
    <tr>
        <td>单元</td>
        <td>单元</td>
        <td>单元</td>
        <td>单元</td>
    </tr>
</table>
```



### 表单标签

表单由容器和控件组成，容器就是这个表单，而按键和搜索框就是控件

```html
<form action="url" method="get | post" name="myform"></form>
```



#### 表单元素

一个完整的表单由表单标签，表单域和表单按钮组成

表单域就是对应的搜索框，表单按钮就类似于输入框之后的提交按钮

```html
<form action="url" method="post" name="myForm">
    <input type="text">
    <input type="submit">
    <button>按钮</button>
</form>
```



**常用的三种类型**

<ul>
    <li>文本框进行信息输入
    </li>
    <li>密码框输入密码加密</li>
    <li>提交按钮</li>
</ul>

```html
用户名<input type="text"><br>
密码<input type="password"><br>
<input type="submit" value="登录">
```



### 块元素和内联元素

|      | 块元素             | 内联元素             | 块级元素             |
| ---- | ------------------ | -------------------- | -------------------- |
| 特点 | 上下排列，可调宽高 | 行级排列，不可调宽高 | 行级排列但是可调宽高 |
| 举例 | ``<h> <p>``        | ``<a> <em>``         | ``<img> <input>``    |

### html5新增元素

#### div容器

div容器是html的常见元素，可以将页面中的一部分区域打包成一个容器

```html
<div id="nav">
....
</div>
```



#### html5新增标签

html5新增的标签解决了原来div容器造成的可自定义id带来的搜索性能上的损失

- ``<head> </head>:`` 头部标签
- ``<nav> </nav>:``导航标签
- ``<section> </section>:``章节标签
- ``<aside> </aside>:``侧边栏
- ``<footer></footer>:``脚部
- ``<article>:``用于一段内容的划分

