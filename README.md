# vue3-template

> 本项目为 vue 3.0 项目模板，旨在于将开发常用的公共方法，css资源文件，和一些指令进行封装，避免每次开发前期的重复造轮子的工作。

## 项目安装
```bash
// 因为可能在构造完这个项目之后，引用的资源进行了更新，请先对资源文件进行升级
yarn upgrade-interactive 
// 进行安装
yarn install
```

### 开发模式编译和热部署项目

```
yarn serve
```

### 为生产环境进行编译和打包

```
yarn build
```

### 修复文件
```
yarn lint
```

------

## 项目配置

### Prettier

请在文件根目录下找到 `prettier.config.js`

### Eslint

请在文件根目录下找到 `.eslintrc.js`

### vue.config.js

请在文件根目录下找到`vue.config.js`

主要进行了一些scss和跨域的配置

### env

`.env`中用于存放项目中需要用到的全局变量，包括后端接口的地址。

根据开发环境和生产环境的不同，区分为`.env.development`和 `.env.production`

------

## 静态资源

项目的静态资源统一存放在`assets`文件目录下。

### styles

该目录下主要存放项目中用到的公共的scss变量和mixins，和一些公共的class。

------

## Vuex Store

`@/src/store`，根据业务模块划分使用模块化开发 `vuex`，并且集成了`vuex-persistedstate`插件对vuex中的数据进行固化。

------

## Vue Router

`@/src/router`，配置了一个全局的前置守卫，将routes使用模块化引入。