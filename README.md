=======
# README

## Install
1. 运行 bundle && npm i
2. 运行 rails db:migrate
3. 运行 rails db:seed
4. 运行`foreman start -f Procfile.dev`

打开浏览器输入： http://localhost:3000

默认用户名为 roc@g.cn
默认密码为： 123123

功能：
1. 显示当前用户所在团队的所有项目事件
2. 可以通过筛选条件筛选某个项目的事件
3. 不支持通过用户筛选事件
4. 可以手动加载事件（翻页）


