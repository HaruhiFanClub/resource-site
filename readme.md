# sos 资源站操作部署指南
## 准备工作
1. 本地需要安装 `nodejs` ，[下载地址](https://nodejs.org/en/)  
1. 进入工程目录，执行 `npm install` 完成依赖安装

## 调试
1. 进入工程目录，执行 `npm run server` 即可在本地启动

## 构建
1. 进入工程目录，执行 `npm run build` 即可构建对应的静态文件（位于 `public`）

## 配置项
### 基础配置项
主要关注如下图所示，配置需要发布到的域名以及根路径  
![base-config.png](/doc-imgs/base-config.png)

### 分类与信息收集链接配置
分类的底图与名称配置方式如下图所示：  
![category.jpg](/doc-imgs/category.jpg)

### 添加资源
在 `<工程目录>/source/_posts` 下添加对应的资源描述文件，文件名需要以 `.md` 作为后缀，格式如下：  
有下载链接的资源：  
![operate.jpg](/doc-imgs/operate.jpg)

没有下载链接的资源：  
![nosource.jpg](/doc-imgs/nosource.jpg)

## 开发修改参考
本资源站采用的是 `hexo` 以及配合开发的主题 `sos`，相关修改在 `<工程目录>/theme/sos` 下进行即可

## 备注
做完修改或添加完资源后可进行构建然后发布



