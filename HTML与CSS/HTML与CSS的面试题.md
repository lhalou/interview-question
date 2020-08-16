
## link和@import的区别

1. link 是HTML标签，兼容性好，会随着页面的加载一起加载
2. @import是css属性，兼容性不那么好，并且要等到页面加载完成才会下载。

## position定位

1. position：relative相对定位，不会脱离文档流，还占据文档流中的位置，只是页面上的元素感知不到他的浮起。是相对元素在文档中的初始位置进行定位。
2. position:absolute绝对定位：和浮动元素一样，脱离文档流，文档流中没有他的位置，是相对第一个定位的祖先元素进行定位的。
3. position：fixed：相对窗口进行布局，当出现滚动条时，不会随之滚动
4. position：static：默认值，不脱离文档流，设置left,right,top,bottom没有效果


## 为什么初始化CSS样式（reset 的CSS文件并如何使用它。知道normalize.css吗）

因为浏览器的兼容问题，各个浏览器对标签的默认样式不同，如果不对样式做初始化，使样式统一，那么可能会造成在不同的浏览器中展示不同的效果。初始化的缺点：影响SEO。

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