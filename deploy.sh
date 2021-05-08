#!/usr/bin/env sh
###
 # @Date: 2021-05-07 10:41:15
 # @LastEditors: zhangbaoyan
 # @LastEditTime: 2021-05-08 13:13:49
 # @FilePath: /xiuer/deploy.sh
### 
# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd docs

# 部署到自定义域域名
echo 'https://zbyecho.github.io/xiuer/' 

# git init
# git add -A
# git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://zbyecho.github.io/xiuer/ master:gh-pages

cd -