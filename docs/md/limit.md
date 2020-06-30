# 启用应用频繁限制

``` bash
npm install --save express-rate-limit

```

``` typescript

import * as rateLimit from 'express-rate-limit';
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      message: { msg: '访问频率太高请先歇一会', data: {} },
    }),
  );
```
