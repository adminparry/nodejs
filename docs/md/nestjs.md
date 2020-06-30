# nestjs
介绍地址 https://nestjs.com/

> 初始化项目

``` bash
npm i -g @nestjs/cli
nest new project-name
npm run start:dev
```

> controller

控制层写一些接口

用法：https://docs.nestjs.com/controllers

``` typescript
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
```

> providers

service层

``` typescript
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}

```

> modules

所有的汇总 包含controllers providers

``` typescript

import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}

```

> middleware

controller之前的一些操作 这在expressjs中的概念会让你更清楚

> filter

过滤器 官方的例子中给的是应用异常的过滤

https://docs.nestjs.com/exception-filters

> pipes

官方给的例子是用于请求参数的校验

> guard

守卫  你可以使用守卫来进行权限 角色控制

> interceptor

这在一些面向切面编程的程序中常出现 拦截请求和响应

> decorator

自定义装饰器


