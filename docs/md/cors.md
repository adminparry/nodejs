# 允许跨域源

``` typescript

 app.enableCors({
    origin: ['https://bmp-element.herokuapp.com', 'http://127.0.0.1:8080'],
    methods: ['GET', 'POST'],
  });

```