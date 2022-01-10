# 基于 ECS 搭建 GitLab 服务

1.  执行以下命令，使用官方脚本添加 Yum 源。

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | bash
```

2.  执行以下命令，安装 GitLab。

```
yum -y install gitlab-ee
```

3.  执行以下命令，初始化已经安装好的 GitLab。
    说明： 此过程将耗时 3 分钟左右，请耐心等待。

```
sudo EXTERNAL_URL="GitLab服务器的公网IP地址" yum install -y gitlab-ce
gitlab-ctl reconfigure
```

4.  执行以下命令，启动 GitLab。

```
gitlab-ctl start
```

5.  执行以下命令，查看 GitLab 启动情况。

```
gitlab-ctl status
```
