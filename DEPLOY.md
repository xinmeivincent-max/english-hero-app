# 部署说明

## 方法1：GitHub网页上传（最简单）

1. 打开浏览器，访问 https://github.com/xinmeivincent-max/english-hero-app
2. 点击 "Add file" → "Upload files"
3. 选择 `english-hero-app-single.html` 文件
4. 在 "Commit changes" 处填写：
   - Commit message: "Update to v2 with 12 units"
5. 点击 "Commit changes"
6. 等待1-2分钟，访问 https://xinmeivincent-max.github.io/english-hero-app/

## 方法2：Git命令行（需要新Token）

1. 生成新Token：
   - 访问 https://github.com/settings/tokens
   - 点击 "Generate new token (classic)"
   - 勾选 "repo" 权限
   - 生成后复制token

2. 使用命令：
   ```bash
   git remote set-url origin https://xinmeivincent-max:YOUR_NEW_TOKEN@github.com/xinmeivincent-max/english-hero-app.git
   git push origin main
   ```

## 文件位置

- 单文件版本：`english-hero-app-single.html`
- 压缩包：`/tmp/english-hero-app-v2.tar.gz`
