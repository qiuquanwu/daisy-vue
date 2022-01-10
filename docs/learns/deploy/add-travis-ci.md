# 为 Github Page 集成 Travis CI

## 写在前面

为了给编写的 vue libs 增加一个可预览的 demo 站点，采用了[Github Pages](https://pages.github.com/), 可以将编译好的静态 html 上传到 github 免费部署。

但是每次手动部署都需要在本地先编译 vue libs 的源码，然后生成 demo 的内容，最后编译 demo 才生成静态的 html。这中间的过程完全是可复制的，因此可以借助集成工具进行自动化部署。

[Travis CI](https://app.travis-ci.com/)功能强大，操作简单，可以实现类似[GitLab CI/CD](https://docs.gitlab.com/ee/ci/)的功能。

## 使用 Travis CI 的过程：

- 注册[Travis](https://app.travis-ci.com/)账号, 可以使用 github 账号登录
- 进入设置页面，"GitHub Apps Integration"点击”Activate“进行 github repositories 授权，这里会跳转到 github
- 输入 github 密码，会跳转到”settings/installations“
- 这里可以看到 Travis CI 的配置，”Repository access“里面可以配置你想授权的 github project
- 然后点击”Approve and install“
- 稍等一会就可以完成绑定

上面是绑定 Travis CI 和 Github 的过程，但是要在项目里面使用 Travis CI，还需要给项目添加配置文件.travis.yml

```bash
bunlanguage: node_js
node_js:
  - lts/*
install:
  - yarn install
before_script:
  - rm -rf docs/.vitepress/dist
  - node bin/deploy.js
script:
  - yarn build
  - ENV=prod yarn vitepress build docs
  - node bin/append-meta.js
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vitepress/dist
  github_token: $GITHUB_TOKEN
  keep_history: false
  on:
    branch: master
```

## 配置 GITHUB_TOKEN

脚本内容一目了然，唯一需要备注的是变量$GITHUB_TOKEN 的配置。

- 进入 Github Repository
- 点击右上角头像，进入 setting
- 进入"Developer settings"
- 选择”Personal access tokens“
- 点击”Generate new token“，填写一些备注信息，然后点击”Generate token“
- 复制生成的 token, 进入”Travis CI“
- 选择需要配置的项目，点击”More options“进入”settings“
- 选择"Environment Variables"，添加一条配置，name 是 GITHUB_TOKEN，value 就是你复制的 token, 点击”add“保存
- 回到项目，重新提交代码到”master“分支，就会看到 Travis CI 开始工作了。
- Travis CI 成功后，你会看到 github project 下面多了一个”gh-pages“的分支，里面就是 Travis CI 编译的静态 html.

## 启用 Github Pages

github page 可以是 html 也可以是.md 格式的内容。这里我们主要配置 html 格式的站点。

- 进入 github project 的”setting“
- 选择”pages“, 可以看到 GitHub Pages
- 在”Source“里面可以配置 GitHub Pages 的源码仓库
- 这里我们直接选择刚刚 Travis CI 自动部署生成的 gh-pages 的根目录
- 可以选择主题，我们这里是自己设置网站样式，就不用它的主题了
- 然后点击 save 就可以完成, 会看到 github 给你生成的 url
- github pages 会自动部署
