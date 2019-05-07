# uni-app-http

> 二次封装uni-app的uni.request 网络请求接口

## 使用

* 安装
``` bash
npm install uni-app-http
```

* 在页面中引用
```app.js or main.js
import http from 'uni-app-http'
http.setHost('you host')
Vue.prototype.$http = http
```

* 运用
```vue
async onLoad() {
  const end = this.$util.getHost()
  this.$util.get('/xxx').then((e) => {console.log(e, 22)})
  const data = await this.$http.get('/xxx')
} 
```
