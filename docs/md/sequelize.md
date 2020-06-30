# sequelize

简介：https://sequelize.org/

> 在nestjs中使用sequelize

sequelize-typescript 的实现是基于sequelize V5所以请使用5的版本

``` bash
npm install --save-dev @types/sequelize
npm install --save sequelize@5.21.0 sequelize-typescript mysql2

cd src
mkdir provider controller entity service module dto

cd provider

touch database.providers.ts

```

``` typescript
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'nest',
      });
      sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

```


> 查询

findAll

> 新增
create
> 修改

> 删除
destroy

> 分页

findAndCountAll

> 排序

> 模糊查询

> 联合查询

