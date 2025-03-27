# C进阶语言积累

## typedef

用法：可以将整段的例如结构体或者枚举类型数据重命名，以达到不用反复地进行长段落地定义

```c
typedef struct{
	uint32_t magic;         //"MAIX"
    uint8_t  mdl_type;      //0 int8, 1 int16, 2 fp32,
    uint8_t  out_deq;       //0 don't dequant out; 1 dequant out
    uint16_t input_cnt;     //only support 1 yet
    uint16_t output_cnt;    //only support 1 yet
    uint16_t layer_cnt;     
    uint32_t buf_size;      //main buf size for middle result
    uint32_t sub_size;      //sub buf size for middle result
    uint16_t in_dims[4];    //0:dims; 1:dim0; 2:dim1; 3:dim2
    uint16_t out_dims[4];
    uint8_t  reserve[28];   //reserve for future
    uint8_t  layers_body[0];//oft 64 here
}tm_mdlbin_t;
```



## enum

用法：可以从一开始列举需要定义的枚举体，需要注意的是结尾用逗号分隔

```c
typedef enum{
    TML_CONV2D    = 0,
    TML_GAP       = 1,
    TML_FC        = 2,
    TML_SOFTMAX   = 3,
    TML_RESHAPE   = 4,
    TML_DWCONV2D  = 5,
    TML_MAXCNT    ,
}tm_layer_type_t;
```



# C编译器相关知识

## `__attribute__((weak))`

用法：这是一种特殊的编译器属性，可将指定的函数或者变量标记为弱链接。在c的实现中默认均为强链接（未定义），我们平时使用时的体现是必须全局定义，不得重复。而弱定义的形式可以让我们对相同的函数或者变量名进行二次定义。

`__attribute__((weak))` 常用于为函数或变量提供默认实现。如果在其他地方提供了相同的强链接符号，则默认实现会被覆盖；如果没有提供强链接符号，则使用默认实现。

**示例1：**

```c
// 默认实现（弱链接）
void my_function() __attribute__((weak));
void my_function() {
    printf("Default implementation\n");
}
```

在其他文件中，可以提供一个强链接版本：

```c
// 强链接版本
void my_function() {
    printf("Strong implementation\n");
}
```



如果强链接版本存在，则会覆盖默认实现；否则，程序会使用默认实现。



`__attribute__((weak))` 可以用于实现可选功能或插件式功能。例如，某些功能可能在某些平台上可用，而在其他平台上不可用。通过弱链接，可以在不可用的平台上提供一个空实现或默认实现。

**示例2：**

```c
// 可选功能（弱链接）
void optional_feature() __attribute__((weak));
void optional_feature() {
    // 默认实现为空
}

// 在某些平台上提供具体实现
void optional_feature() {
    printf("Optional feature is enabled\n");
}
```



# c中的特殊数据类型

## union

用法：union类似于struct，用于将不同数据类型的数据存储在同一位置，因此union的所有成员共享一块内存，因此union的内存大小取决于其最大成员的大小。union是内存共享的，因此其特点是内部仅一个成员在同一时刻内有效。

定义 `union`

```c
union my_union {
    int i;
    float f;
    char c;
};
```



- 上面定义了一个名为 `my_union` 的联合体，包含三个成员：一个 `int` 类型、一个 `float` 类型和一个 `char` 类型。
- 这个 `union` 的大小等于其最大成员的大小（在这个例子中是 `float`，通常是4字节）。