
## link和@import的区别

1. link 是HTML标签，兼容性好，会随着页面的加载一起加载
2. @import是css属性，兼容性不那么好，并且要等到页面加载完成才会下载。会造成无样式内容闪烁
3. link 可以通过 rel="alternate stylesheet" 指定候选样式
4. @import 必须在样式规则之前，可以在 css 文件中引用其他文件
5. 总的来说：link > @import

## position定位

1. position：relative相对定位，不会脱离文档流，还占据文档流中的位置，只是页面上的元素感知不到他的浮起。是相对元素在文档中的初始位置进行定位。
2. position:absolute绝对定位：和浮动元素一样，脱离文档流，文档流中没有他的位置，是相对第一个不为static定位的祖先元素进行定位的。
3. position：fixed：相对窗口进行布局，当出现滚动条时，不会随之滚动
4. position：static：默认值，不脱离文档流，设置left,right,top,bottom没有效果
5. inherit 规定从父元素继承 position 属性的值


## 为什么初始化CSS样式（reset 的CSS文件并如何使用它。知道normalize.css吗）

因为浏览器的兼容问题，各个浏览器对标签的默认样式不同，如果不对样式做初始化，使样式统一，那么可能会造成在不同的浏览器中展示不同的效果。可以使用 reset.css 或 Normalize.css 做 CSS 初始化。初始化的缺点：影响SEO。
- reset.css 意为重置默认样式。
- Normalize.css 只是一个很小的 css 文件,但它在默认的 HTML 元素样式上提供了跨浏览器的高度一致性。相比于传统的 css reset，Normalize.css 是一种现代的，为 HTML5 准备的优质替代方案。
- 使用normalize.css的原因
  ```
  保护有用的浏览器默认样式而不是完全去掉它们
  一般化的样式：为大部分 HTML 元素提供
  修复浏览器自身的 bug 并保证各浏览器的一致性
  优化 CSS 可用性：用一些小技巧
  解释代码：用注释和详细的文档来
  ```

## 是styuls和sass和less的区别

1. 均有"变量"，"混合"，"嵌套"，"继承"，"颜色混合"五大基本特征
2. saa和less的语法较为严谨，less要求一定要使用"{}"，scs和styuls可以通过缩写表示层级及嵌套关系
3. scss无全局变量的概念，less和styuls有类似其他语言的作用域概念
4. sass是基于ruby语言的，而less和styuls是基于nodejs npm下载相应库进行编译

## css的content属性有什么用

content作用于微元素before/after上，用来插入生成的内容，主要在清楚浮动的时候使用。

##  css动画

1. 依靠CSS3中提出的三个属性：transition、transform、animation
  - transition：定义了元素在变化过程中是怎么样的，包含transition-property、transition-duration、transition-timing-function、transition-delay。
  - transform：定义元素的变化结果，包含rotate、scale、skew、translate。
  - animation：动画定义了动作的每一帧（@keyframes）有什么效果，包括animation-name，animation-duration、 animation-timing-function、animation-delay、animation-iteration-count、animation-direction

## display:none 与 visibility：hidden的区别

1. display:none，会让元素从渲染树中消失，并且渲染的时候不会占据任何的空间。
2. visibility:hidden，也是让元素不可见，但是元素还是存在渲染树中，只是没有显示
3. display:none不是继承属性，子节点也会消失。
4. visibility:hidden可以继承，对子节点设置visibility:visible，可以让子节点显示
5. display:会造成文档重排（回流），vixibility只会造成文档重绘
6. 读屏器不会读取display:none的内容，但是会读取visibility:hidden的内容。

## css hack原理

利用不同的浏览器对css的解析结果的不一样编写针对特定浏览器的css。
- 属性hack
- 选择器hack
- IE条件注释

## css选择器有哪些

1. ID选择器
2. class选择器
3. 标签选择器
4. 属性选择器
5. 伪类选择器
6. 后代选择器
7. 通配符选择器
8. 相邻选择器

## display的属性值有哪些及作用

1. display:block：像块元素一样显示
2. display:none；像行内元素一样显示
3. display:inline-block;像行内元素一样显示，但是可以像块级元素一样对其设置宽高等。
4. display:list-item:像块级元素一样显示，但是会添加样式列表标记
5. display：table
6. display：inherit；继承

## display:inline-block间隙问题如何解决

移除空格、使用 margin 负值、使用 font-size:0、letter-spacing、word-spacing

## display:inline-block 什么时候会显示间隙？

1. 相邻的 inline-block 元素之间有换行或空格分隔的情况下会产生间距
2. 非 inline-block 水平元素设置为 inline-block 也会有水平间距
3. 可以借助 vertical-align:top; 消除垂直间隙
4. 可以在父级加 font-size：0; 在子元素里设置需要的字体大小，消除垂直间隙
5. 把 li 标签写到同一行可以消除垂直间隙，但代码可读性差

## 列出几种隐藏元素的方法

1. opacity：0;设置0可以是一个元素完全透明
2. visibility:hidden；元素不可见，但是元素占用的空间还是存在
3. display:none；元素不可见，元素占用的空间也不存在
4. transform：scale(0)；将一个元素设置为缩放无限小，元素将不可见，元素在原来的位置将被保留
5. position:absolute：设置一个很大的left负值，使元素在可见区域不可见
6. height：0;并且消除边框。
7. filter:blur(0) 将一个元素的模糊度设置为0

## opacity 和 rgba的区别

1. opacity作用于元素及元素内的所有内容（包括文字）的可见度
2. rgba只作用于自身的颜色或者背景色，子元素不会继承。

## 全屏滚动的原理是什么？ 用到了 CSS 的那些属性？

原理类似图片轮播原理，超出隐藏部分，滚动时显示
可能用到的 CSS 属性：overflow:hidden; transform:translate(100%, 100%); display:none;

## a标签上四个伪类的执行顺序是怎么样的？

link > visited > hover > active

## 伪元素和伪类的区别

1. 伪元素在元素的前后插入额外的内容或样式，这些元素不存在文档结构中，只是对外部是可见的。
2. 伪类：将特殊的效果添加到特定的元素上。

## line-height的理解

line-height是行高，height=line-height可以设置水平居中，无height时，是line-height撑起元素的高度。