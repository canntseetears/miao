# video

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### git command
* git remote add origin ssh 创建远程仓库，远程仓库有别名origin
* git push origin master 主分支
* git checkout -b dev 创建dev分支
* git push origin dev 将dev push
*先git status查看状态，git add .添加到暂存区，git commit -m ""提交，最后git push 远程仓库名 分支名
*合并分支：先切换git checkout dev;合并git merge createComponents --no-ff（参数表示显示历史记录）； 提交到远程仓库git push origin dev
*git branch -d components删除分支；查看分支git branch
