# vi/vim 的简单使用笔记

## 简介

**本文中的笔记是在自学vim操作的过程中记录的笔记，主要参考自带的vimtutor和菜鸟教程相关内容**

>Vim 是从 vi 发展出来的一个文本编辑器。代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。简单的来说， vi 是老式的字处理器，不过功能已经很齐全了，但是还是有可以进步的地方。 vim 则可以说是程序开发者的一项很好用的工具。
>
>连 vim 的官方网站 (https://www.vim.org/) 自己也说 vim 是一个程序开发工具而不是文字处理软件。

## vim 的基本模式

vim中主要分为三大模式，命令模式，输入模式和命令行模式，具体转换如下图所示

![三大模式](https://www.runoob.com/wp-content/uploads/2014/07/vim-vi-workmodel.png)

## vim的主要使用

### 常用的移动方法

- **h(←) j(↓) k(↑) l(→)**:：可以通过h,j,k,l四个键位控制vim中光标（cursor）的移动
- **n(h/j/k/l)**：可以实现n个h,j,k,l的效果，*特殊的n<enter>也可以实现nj的效果*
- **g**
  - **gg**可以跳转至文档的开头
  - **G**可以跳转至文档的末尾
  - **nG**可以跳转到第n行

- **0**：移动到每行的开头
- **￥**：移动到每行的结尾
- **w**：移动到下一个单词，可结合num改变移动数目
- **e**：移动到词尾，可结合num改变移动数目

### 搜索替换

- **/word**：在文件中向下文寻找word，可以结合set 操作使用（:set）hls:单词高亮，is:给出部分满足的结果，ic:忽略大小写区别。使用操作:set nohls，可以取消该set
- **？word**：可以向上文寻找最近的word,并且移动光标至该处。
- **n/N**：配合以上两条指令，n可以跳转到下一条，N可以跳转到上一条
- **%s/word1/word2/g**：可以将全文的word1替换为word2，使用如下命令：%s/word1/word2/gc，可以在enter后进入确认操作

### 删除和复制粘贴

- **x**：直接删除光标后的字符，可以在x前添加n来控制删除字符的个数
- **dd**：删除整行
- **r+x**：x为替换之后的字符
- **v**：可以勾选从v开始移动至光标停止处所有内容
- **y**：可以进行复制，一般配合v进行使用
- **p**：进行粘贴操作

### 常用的编辑操作

- **i**：在光标所在处输入，并且切换为编辑模式
- **a**：在光标后输入
- **o/O**：o为从下一行开始输入，O为从上一行开始输入

### 常用指令

- **w**：将编辑的结果写入硬盘
- **q**：退出vim，q!为不存储强制离开，wq为存储后离开，wq！为强制存储后离开
- **w [filename]**：将文件另存为file
- **r [filename]**：将文件读入file中