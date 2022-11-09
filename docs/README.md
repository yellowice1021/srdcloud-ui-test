# 快速开始

#### 安装组件库

```bash
npm i srdcloud-ui-test
```

#### 引用组件库

> 在 main.js 中引用组件库

```javascript
// 全部引入
import "srdcloud-ui-test/dist/css/index.css";
import MUI from "srdcloud-ui-test";
Vue.use(MUI);

// 按需引入
import "srdcloud-ui-test/dist/css/card.css";
import { Card } from "srdcloud-ui-test";
Vue.use(Card);
```
