# React练习项目



## 1.1 项目介绍

对[爱彼迎民宿租赁网站](https://www.airbnb.cn/)的简单实现，后续继续更新。

现完成功能如下：

- 首页
  - 房源列表封装，可任意列展示，配合自定义的滚动视图组件可做到水平滚动展示
  - 首页头部组件添加动画效果

![image-20221122130213420](C:/Users/13215/AppData/Roaming/Typora/typora-user-images/image-20221122130213420.png)

![image-20221122130313104](C:/Users/13215/AppData/Roaming/Typora/typora-user-images/image-20221122130313104.png)

![image-20221122130536735](C:/Users/13215/AppData/Roaming/Typora/typora-user-images/image-20221122130536735.png)

- 更多房源页面
  - 单个房源商品拥有多张图片，使用轮播图展示，自定义轮播图指示器

![image-20221122130855551](C:/Users/13215/AppData/Roaming/Typora/typora-user-images/image-20221122130855551.png)





- 详情页
  - 自定义图片浏览器，配合自定义的指示器组件展示图片列表

![image-20221122130944611](C:/Users/13215/AppData/Roaming/Typora/typora-user-images/image-20221122130944611.png)

![image-20221122131104549](C:/Users/13215/AppData/Roaming/Typora/typora-user-images/image-20221122131104549.png)

## 1.2 项目规范

1. 文件夹、文件名称统一小写、多个单词以连接符（-）连接；

2. JavaScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；

3. CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）;

4. 整个项目不再使用class组件，统一使用函数式组件，并且全面使用Hooks；

5. 所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；

6. 组件内部的状态，使用useState、useReducer；业务数据全部放在redux中管理；

7. 函数组件内部基本按照如下顺序编写代码：
   1. 组件内部state管理；
   2. redux的hooks代码；
   3. 其他组件hooks代码；
   4. 3.其他逻辑代码；
   5. 返回JSX代码；

8. redux代码规范如下：
   1. 主要采用@reduxjs/toolkit（RTK）库编写redux代码，简化redux的编写逻辑，也可结合普通的写法；
   2. 每个模块有自己独立的reducer，通过RTK的configureStore方法进行合并；
   3. 每个模块使用RTK的createSlice创建分片slice，slice有两个属性，分别是reducer，actions；
   4. 在RTK的createAsyncThunk方法的回调函数中发送异步网络请求，然后再派发对应的action；
   5. redux直接采用redux hooks方式编写，不再使用connect；
9. 网络请求采用Axios
   1. 对Axios进行二次封装；
   2. 所有的模块请求会放到一个请求文件中单独管理；

10. 项目集成了Ant Design，Material UI，简单使用了其中的一两个组件，大部分组件自己手写。

11. 其他规范在项目中根据实际情况决定和编写；