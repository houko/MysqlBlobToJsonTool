# Alice博客系统

## 下载到本地并安装
* git clone xxxxxxxxxx(项目地址)
* npm install -g typescript(在全局安装typescript)
* npm install -g angular-cli(全局安装脚手架)
* npm install(安装项目相关插件)
* 如果未翻墙，可能会导致npm install失败，遇到这个问题你可以有两种选择：1：翻墙后再安装（推荐），2：安装国内镜像（不推荐，坑无限）
* 如果你需要安装淘宝镜像 npm install -g cnpm --registry=https://registry.npm.taobao.org
* 安装完成后执行cnpm install

## 如何运行项目？
输入 `npm start`启动服务. 在浏览器中打开 `http://localhost:4000/`.

## 打包
* ng build --prod(正式环境)用aot打包文件会小很多
* ng build --dev/ng build(测试环境)

## 自动化发布
* sudo npm run deploy-dev(测试环境发布)
* sudo npm run deploy-pro(正式环境发布)

## 单元测试
ng test

## 参考文献
* [angular官网](https://angular.io)
* [angular中文官网](https://angular.cn)
* [typescript中文官网](https://www.tslang.cn)
* [angular-cli github](https://github.com/angular/angular-cli)
* [less 中文网](http://lesscss.cn)