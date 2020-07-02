# 验证码

``` bash
npm install svg-captcha --save
```
> 配置

``` typescript
async generateVerifCode() {
    const codeConfig = {
      size: 4, // 验证码长度
      ignoreChars: '0oO1ilI', // 验证码字符中排除 0oO1ilI
      noise: 2, // 干扰线条的数量
      width: 160,
      height: 50,
      fontSize: 50,
      color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      background: '#eee',
    };
    const captcha = svgCaptcha.create(codeConfig);
    this.ctx.session.verifCode = captcha.text.toLowerCase(); // 存session用于验证接口获取文字码
    this.ctx.body = captcha.data;
  }
```