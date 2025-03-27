# 基于VUE框架的web前端开发

## CSS

### CSS简介

CSS叫作层叠样式表，是一种用来结构化文档（html等）添加样式的语言，起到美化和渲染页面的作用

CSS通常由一个选择器和多条声明组成，因此CSS是一种声明式的样式语言，它不直接操作html文档而是浏览器通过CSS中的选择器与html建立关联，进行文档的渲染

### CSS工作原理

1.浏览器载入html文件

2.html文件转换为DOM(结构为树状，可以理解为对象树，相比于html的静态形式，DOM提供了供JavaScript, C#, CSS的操作节点)

3.浏览器此时拉取html资源

4.浏览器加载CSS文件，将通过选择器将相关的渲染文件作用于DOM树的节点，变为一个具有渲染信息的树

5.此时浏览器再通过应该出现的结构进行布局

6.网页完成着色

![css工作流程](E:\image\css工作流程.png)



## CSS开发

### 引入CSS

在开发过程中一共有三种方式引入css进行渲染

#### 内联式引入

以属性的形式定义在html文件中，缺点是需要对所有的元素进行逐一渲染，降低了开发效率

```html
<body>
    <h3 style="background:red; font-size: 200px;">hello world</h3>
</body>
```



#### 内部样式

对单个文档进行统一的操作利用一个``<style>``标签直接定义在头部中即可，缺点是多个页面定义容易混淆，依然需要重复定义

```html
<head> 
	<style>
        h1:{
            background: red;
        }
    </style>
</head>
```



#### 外部样式

是最为常用的方式，首先需要单独创建一个css文件，然后在html文件在头部引入标签``<link>``链接到css文件，这种方式可以免去重复定义的痛苦，而且可以模块化css文件

```css
p{
    margin: 0;
    font: 14px/1.5 "微软雅黑";
    background: yellowgreen;
}
a{
    text-decoration: none;
    color:aqua;
}
```



```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="public.css">
</head>
```



### css选择器

#### 全局选择器

作用于全局的所有元素（不太推荐）

```html
<type>
    *{
    	background: red;
        font-size: 200px;
    }
</type>
```



#### 元素选择器

上文提到过的利用不同标签进行筛选，可以注意的是``<span>``标签 ，使用后可以进行局部操作

```html
<p>
    <span>risc-v</span>设计基础
</p>
```



#### 类选择器

可以自定义多个标签，使用``.``进行定义，不同标签之间间隔空格即可设置多个元素

```html
<style>
    .content{
        font-size: 200px;
        color: red;
    }
    .background{
        background: rgb(0, 255, 115);
    }
</style>

...

 <p class="content background">risc-v cpu设计</p>

```



#### id选择器

类似于类选择器，但是理论上id只能够定义一次，且id选择器的优先级高于累选择器

```html
<style>
    #text{
    color: red;
    font-size: 20px;
    }
</style>

...

<body>
    <p id="text">hello world</p>
</body>
```



#### 合并选择器

采用合并的写法，可以避免单个逐次重复定义

```html
.text,.title{
    color: red;
    font-size: 20px;
}
```



#### 选择器的排序

内联选择器 > id选择器 > 类选择器 > 全局选择器



### 字体

#### color

color可以定义字体的颜色具有多种的定义方式

- 直接采用名字定义  color: blue;

- 直接采用颜色定义  color: #ff0000;
- 采用rgb数组的方式 color: rgb(255,0,0)

#### 字体大小

直接定义``font-size``

```html
<style>
    font-size: 20px;
</style>
```



#### 字体粗细

第一种方式也是用已有的变量定义

粗：bold bolder

细：light lighter



第二种方式是采用数字的形式修改

400到700

#### 字体样式

| font-style | 样式     |
| ---------- | -------- |
| normal     | 正常样式 |
| italic     | 斜体     |

#### 字体选择

利用style-family可以选择开发所需要的字体，如“微软雅黑”，“宋体”



### 背景

#### background-color

指定背景颜色

#### background-image

看可以指定图像的本地文件地址

```html
<style>
    background-image:url("E:\\image\\attack.jpg");
</style>
```

#### background-repeat

指定图片的排列方式

| background-repeat | style       |
| ----------------- | ----------- |
| repeat-x          | 仅x方向重复 |
| repeat-y          | 仅y方向重复 |
| repeat            | 不重复      |

#### background-size

| background-size | example                      |
| --------------- | ---------------------------- |
| 直接指定尺寸    | 400px 400px                  |
| 指定比例        | 100% 100%                    |
| cover           | 主要使用这种方式充满整个容器 |

#### background-position

可以更改图片的位置，有left，center，top，right等设置

```html
background-position: left center;
```



一般是center center，特殊情况可以用x% y%和x px和y px来指定



### 文本属性

#### text-align

可以设置文本的对齐效果，常见的有left，right，center

#### text-decoration

设置文字修饰，常见的overline，underline，line-through

#### text-transform

定义字符的大小写

| text-transform | 效果       |
| -------------- | ---------- |
| capitalize     | 首字母大写 |
| uppercase      | 全部大写   |
| lowercase      | 全部小写   |

#### text-indent

首字母缩进

```html
<style>
	p{
        text-indent: 20px;
      }
</style>
```



### 表格

#### border

这个属性一共有三个变量，分别用来定义：粗细，虚实，颜色

```html
table{
	border:2px solid red;
}
```



#### border-collapse

用于折叠边框，使得边框仅仅有单一的厚度

```html
table,td{
    border:2px solid red;
    border-collapse: collapse;
}
```



#### 表格尺寸

可以使用width，height属性

#### 文字对齐

利用``text-align``可以调整文字在表格中的位置

```
text-align: center;
```



#### 文字填充

使用padding可以进行填充，不进行表格大小的设置

```
padding: 10px;
```



#### 表格颜色

其中表格边框的颜色可见第一条，关于文本颜色的设置

```html
background-color: aliceblue; 
color:aqua;
```



### 关系选择器

#### 后代选择器

指定元素及其下级子元素全部纳入选择

```html
    <style>
        ul li{
            color: red;
        }
    </style>
```



#### 子代选择器

指定元素的相邻子元素纳入选择

```html
   <style>
        div>p{
            color: red;
        }
    </style>
```



#### 相邻兄弟选择器

向下寻找的第一个相邻元素纳入选择

```html
   <style>
        div+p{
            color: red;
        }
    </style>
```



#### 通用兄弟选择器

向下寻找所有的兄弟元素纳入选择

```html
   <style>
        div~p{
            color: red;
        }
    </style>
```



### 盒子模型

#### content

盒子的内容，一般是文字或者图像

#### padding

content外的填充，实际是将content向外扩充了一部分，可以赋两个值第一个代表左右第二个代表上下

padding可以指定left，top，和bottom

#### margin

外边距，在盒子周围添加一层透明的边框

也可以指定方向进行填充

#### border

在padding外添加的一圈边框

```html
    <style>
        div{
            height: 100px;
            width: 100px;
            background-color: red;
            padding: 20px 50px;
            margin: 50px 20px;
            border: red solid 10px;
        }
    </style>
```



### 浮动

#### 简介 

浮动是一种网页布局方式，浮动是在父元素下定义，对子级元素进行排列的方式，一般是规定一处边缘，使得元素可以浮动

#### 浮动的使用

可以定义left/right/none

```html
    <style>
        .box{width: 500px;
            height: 500px;
            background-color:rgb(179, 255, 0);
            border: 10px solid red;
        }
        .zuo{
            width: 50px;
            height: 50px;
            color: black;
            float: left;
            border: 10px solid rgb(255, 0, 0);
        }
        .you{
            width: 50px;
            height: 50px;
            color:purple;
            float: right;
            border: 10px solid rgb(255, 0, 0);
        }
    </style>
```



#### 浮动的清除

在外部的盒子出现高度坍塌时，浮动可能会对页面产生影响，因此有两种方式

- 引入overflow

```html
.box{width: 500px;
            background-color:rgb(179, 255, 0);
            border: 10px solid red;
            overflow: hidden;
        }
```



### 定位

定位可以更为方便地进行布局

#### 相对定位

相对于原来的位置，进行移动

```html
.zuo{
            width: 100px;
            height: 100px;
            color: black;
            float: left;
            background-color: yellow;
            position: relative;
            right: 20px;
        }
```



#### 绝对定位

采用绝对移动的方式，相对于已经定位的父元素或者html标签移动

```html
.a{
            width: 100px;
            height: 100px;
            color: black;
            float: left;
            background-color: yellow;
            position: absolute;
            right: 10px;
        }
```



#### 固定定位

相对于窗口定位

```html
.a{
            width: 100px;
            height: 100px;
            color: black;
            float: left;
            background-color: yellow;
            position: fixed;
            right: 10px;
        }
```

