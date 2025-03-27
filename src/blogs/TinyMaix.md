# TinyMaix

## 简介

TinyMaix是一种TinyMl的实现方式，以简洁和高可拓展性见长，适用于在不同的嵌入式平台进行部署大至树莓派小到3508都能够实现部署

- 核心代码少于**400行**(tm_layers.c+tm_model.c+arch_cpu.h), 代码段(.text)少于**3KB**
- 支持keras h5或tflite模型转换

## 代码解析

### ``tm_layers.cpp:``

该文件中定义了多个前向传播的函数

#### 以``tml_conv2d_dwconv2d``为例

`涉及参数：`

- tm_mat_t* in， tm_mat_t* out：输入特征图，输出特征图
- wtype_t* w, btype_t* b：卷积核权重和偏置
- int kw, int kh：卷积核的宽度和高度
- int sx, int sy, int dx, int dy：水平和垂直的步长和扩张率
- int act：激活函数类型
- int pad_top, int pad_bottom, int pad_left, int pad_right：函数的填充大小
- int dmul：深度可分离卷积的标志
- sctype_t* ws, sctype_t in_s：权重的量化缩放因子，输入特征图的量化缩放因子
- zptype_t in_zp：输入特征图的量化零点

`功能：`

实现二维卷积

#### tml_gap：

`功能：`

实现平均池化

#### tml_fc

`功能：`

实现全连接层

#### tml_softmax

`功能：`

实现softmax激活函数

### ``tm_model.cpp:``

 tm_load和tim_unload实现模型的加载和取消加载

 tm_preprocess实现预处理进行量化处理

 tm_run实现推理