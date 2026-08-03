# 上线检查清单

## 已固化到项目

- 正式站点地址：`https://csrenyi.com`
- 构建命令：`corepack pnpm build`
- 上线前全量检查：`corepack pnpm prelaunch`
- 生产启动：`HOST=0.0.0.0 PORT=3000 ENABLE_HSTS=true corepack pnpm start`
- 健康检查：`GET /healthz`
- sitemap、robots、canonical、四语 hreflang、Open Graph、Twitter Card、JSON-LD
- Product、FAQPage、BreadcrumbList 结构化数据，以及产品—案例—询盘内链
- 308 页 sitemap、345 条已验证 301 清单（`docs/redirect-map.csv` / `public/redirects.json`）
- 页面数据按语言动态加载；图片懒加载，首页视频桌面延迟加载、手机封面优先
- 404 状态、Brotli/Gzip、静态资源分层缓存和基础安全响应头
- 可配置 Google Analytics、百度统计、站长验证和转化事件；未填写 ID 时默认关闭
- 404/5xx 请求日志和响应耗时；`REQUEST_LOGS=true` 时记录全部请求

## 发布前需要人工确认

- 正式域名 DNS 的 A/AAAA/CNAME 已指向最终服务器或 CDN。
- HTTPS 证书已签发，HTTP 会 301 跳转到 HTTPS；确认后才启用 `ENABLE_HSTS=true`。
- WhatsApp 询盘号码确认是 `+86 132 5078 9622`。当前表单会打开 WhatsApp，不会发送邮件或写入数据库。
- 对外邮箱确认是 `info@csrenyi.com`，并已配置 MX、SPF、DKIM、DMARC。
- 电话、地址、微信公众号二维码和备案号 `湘ICP备18004704号-1` 与营业主体一致。
- 隐私政策、广告法声明和法律声明由业务负责人完成最终合规确认。
- 如需统计，在部署环境填写 `VITE_GA_MEASUREMENT_ID`、`VITE_BAIDU_ANALYTICS_ID`，并同步更新隐私政策和 Cookie 告知；当前未填写 ID，访客统计默认关闭。
- 在部署环境填写 Google、Bing、百度站点验证值；完成账号验证后才能正式提交 sitemap。

## 发布步骤

1. 在待发布提交运行 `corepack pnpm prelaunch`，必须为零错误。
2. 记录当前 Git 提交号并创建发布标签，保留上一版构建产物作为回滚版本。
3. 发布后检查首页、产品、案例、联系页和四种语言首页。
4. 检查 `/healthz`、`/robots.txt`、`/sitemap.xml` 和一个不存在的地址（必须返回 404）。
5. 对照 `docs/redirect-map.csv` 抽查旧站高流量 URL，确认没有重定向链或错误目标。
6. 在百度搜索资源平台、Google Search Console 和 Bing Webmaster Tools 提交 `https://csrenyi.com/sitemap.xml`。
7. 观察 24 小时的 5xx、404、响应时间、CPU、内存、磁盘、证书和询盘链路。

## 回滚条件

- 大面积 5xx、关键资源加载失败、询盘无法打开、四语路由错误或页面内容回退时立即回滚上一发布标签。
- 回滚后重新运行健康检查和关键页面检查，再排查新版本。
