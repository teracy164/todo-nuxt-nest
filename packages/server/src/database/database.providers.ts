import { Sequelize } from 'sequelize-typescript';
import { Todo } from '../todos/todo.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST || 'localhost',
        port: Number(process.env.DATABASE_PORT || 5432),
        username: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || 'password',
        database: process.env.DATABASE_NAME || 'database',
      });
      sequelize.addModels([Todo]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
