# Markdown 语法学习

## 语法简介



> Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia、简书等。



个人认为Markdown文本编辑功能最大的特点是优雅（elegant~）,相比较于运用word进行文本编辑，前者更加具有可玩性和可拓展性。因此学习markdown的使用，也可以一定程度上改掉本人懒于写blog的习惯。本篇blog仅仅涉及md相关语法，以帮助笔者日后进行翻阅以及help更多人学习md语法



## 基本语法介绍

本文中仅涉及常用的语法形式，完整的教程可以参考[Markdown 语法][Markdown 链接语法 | Markdown 教程](https://markdown.com.cn/basic-syntax/links.html)

###  标题语法

#### 方法一：



> 要创建标题，请在单词或短语前面添加井号 (`#`) 。`#` 的数量代表了标题的级别。例如，添加三个 `#` 表示创建一个三级标题 (`<h3>`) (例如：`### My Header`)。



一级标题`# 这是一级标题`

三级标题`### 这是三级标题`

**注：考虑到不同markdown编辑器处理问题，#之后留有space**

#### 方法二：

通过Ctrl+num的方式可以定义当前标题<br>

如：一级标题为：Ctrl+1



### 段落语法

简单的通过空行的方式进行段落的区分

**注：千万不要进行首行的tab或者space缩进，否则会导致编辑器无法识别你书写的语法**



### 换行语法

进行换行<br>

一般使用两个空格

或者使用html标签<br>

但是后者在我实际应用中更为有效（typora里面支持enter的换行，考虑到便捷性我就不进行统一的运用换行符号了）



### 强调语法

一般分为两种：

*斜体（Italic）*：`*斜体*`

**粗体（Bold）**：`**粗体**`



### 引用语法

引用一般在段落之前加`>`,一个段落只需要添加一次，添加两个可以形成引用嵌套（但是很丑）

也可以在引用段内添加其他元素（感觉还是很丑）<br>



> ## 引用
>
> - reference1
>
> - reference2



### 列表语法

个人感觉还是比较使用，列表语法分为有序列表和无序列表，此处仅仅给处一种无序列表的构建方式

#### 有序列表

实现仅仅需要加入数字编号即可，typora甚至可以省略之后的标号

1. text1

2. text1

3. text1
   1. text
   2. text

4. text1

**注：需要注意num.和text之间的空格**

#### 无序列表

实现仅需在段落之前加`-`，嵌套在`-`再加一个tab即可，同理typora中后续符号可省略

- text1
- text2
  - text
  - text
- text3



### 代码语法

- 单词和短语可以置于``之间

- 利用```可以包围代码块，并且在开头可以标记对应的语言

  ````markdown
  ``` verilog
  {
  ....
  }
  
  ```
  ````

  

  ```verilog
  module adder(
      input clk,
      input rst_n,
      input re1,
      ....
  )
  ```

  

可以看到在对响应代码段使用语言进行高亮的时候，代码块中的关键词和一些变量可以被高亮

### 分割线语法

在两个代码段之间加入`---`即可

text1

---

text2

```markdown
text1

---

text2
```

### 链接语法

基础的链接语法`[超链接显示名](超链接地址 "超链接title")`，超链接显示名是链接对外显示的名字，而链接title则是链接在鼠标移动到相应链接上现实的链接名字,**此处地址和title间有空格进行间隔**<br>

想要强调超链接需要在前后加上`*`或`**`



[bilibili](https://www.bilibili.com/ "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili")

*[bilibili](https://www.bilibili.com/ "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili")*   

**[bilibili](https://www.bilibili.com/ "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili")**



```markdown
[bilibili](https://www.bilibili.com/ "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili")  
*[bilibili](https://www.bilibili.com/ "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili")*   
**[bilibili](https://www.bilibili.com/ "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili")**   
```



### 图片语法

图片语法相对来说比较类似于链接语法`![图片alt](图片链接 "图片title")`,对应有本地和链接图像，如果是本地图片在托管的时候也要和md文件一起上传，或者先单独托管图片再单独上传md文件

<img src="E:\博客\Markdown_grammar.assets\Anya.jpg" alt="阿尼亚图片" title="WakuWaku" style="zoom:25%;" />

```markdown
![阿尼亚图片](E:\博客\Markdown_grammar.assets\Anya.jpg "WakuWaku")
```



<img src="https://img.keaitupian.cn/uploads/2022/04/18/c124ea098c3c4869b4d1366ee2c937cb.jpg" alt="阿尼亚图片" title="阿尼亚" style="zoom:25%;" />

```m
![阿尼亚图片](https://img.keaitupian.cn/uploads/2022/04/18/c124ea098c3c4869b4d1366ee2c937cb.jpg "阿尼亚")
```



### 转义符语法

主要是使用`\`，对于`*`或者`#`想要单独type出来可以使用转义符如

\# yxy

\** yxy



## 拓展语法



### 表格使用

> 要添加表，请使用三个或多个连字符（`---`）创建每列的标题，并使用管道（`|`）分隔每列。您可以选择在表的任一端添加管道。

| 射手   | 打野   |
| ------ | ------ |
| 公孙离 | 裴擒虎 |
| 马可   | 瑶妹   |
| 金克斯 | 艾克   |

但是在typora里面这类似语法又双叒叕被简化了，因此在此给出完整md代码标题和内容之间可由---间隔。不过考虑到便捷性，前者还是相对更容易接受。此外，不习惯使用md语法的也可以从excel导入表格，反之也是可以的。

```markdown
|射手           |打野         |
|---           |---          |
|公孙离         |裴擒虎        |
|马可           |瑶妹          |
|金克斯          |艾克         |
```



### 脚注

[^脚注]: 这是一条脚注

```
[^脚注]: 这是脚注的内容  
```

感觉不大有用，先放着



### 删除线使用

在文字的前后加上波浪线就好了

~~海的那边是敌人~~

```
~~海的那边是敌人~~
```



### emoj

> 在大多数情况下，您可以简单地从[Emojipedia (opens new window)](https://emojipedia.org/)等来源复制表情符号并将其粘贴到文档中。许多Markdown应用程序会自动以Markdown格式的文本显示表情符号。从Markdown应用程序导出的HTML和PDF文件应显示表情符号。

😊😂😍🤔😉🥹

表情包最有用的一集😂



## 最后

其实md的语法简短又简介，完美地符合了我对文本编辑的需求。不过希望这不是最后一期博客😂学md是因为最近在学软件的东西，发现输入的太多但是输出的机会很少，希望能借blog多多督促一下自己。俺は海贼王になる男だ  ! 希望以后也有机会多多学习吧。



## 引用

[Markdown 教程](https://markdown.com.cn/)

[Markdown 常用语法 - peterjxl - 博客园](https://www.cnblogs.com/PeterJXL/p/18330216)