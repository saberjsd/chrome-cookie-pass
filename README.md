
# 谷歌拓展：解决90+版本后cookie携带问题

## 解决方案

通过chrome拓展插件提供的webRequestBlocking API和cookie API实现强制携带cookie

## 使用指南

下载[插件](https://raw.githubusercontent.com/saberjsd/chrome-cookie-pass/master/fotor-cookie%E6%8F%92%E4%BB%B6.zip)，点击Chrome浏览器右上角… =>更多工具=>拓展程序

打开开发者模式，拖入zip文件，立即生效

右上角插件按钮可以将插件固定在顶端

## 本地调试项目
- git clone 仓库地址

- yarn i

- yarn watch

会生成build文件夹，将文件夹拖入谷歌拓展中。支持热更新。

- 打包发布
yarn build

会生成build文件夹，打包成zip发布

---

### 更新说明：

0.1.1 修复了百度网盘和谷歌账号验证时出现的无法成功跳转的问题

0.1.2 修复了initiator和url不一致时的解析逻辑

0.1.3 【不携带cookie的白名单】验证时机提前

0.1.4 添加不携带cookie的白名单，添加建议关闭的文案

0.2.0 添加强制替换cookie的配置

0.2.1 支持对ip地址型domain的支持
