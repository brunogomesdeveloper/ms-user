/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/entity';
import * as dotenv from 'dotenv';
dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      //   const sequelize = new Sequelize({
      //     dialect: 'postgres',
      //     host: 'postgres://npmpzylp:m0sWiC9yvgm5nnmMchHHTZV9LPnHX8Ca@castor.db.elephantsql.com/npmpzylp',
      //     port: 3306,
      //     username: 'npmpzylp',
      //     password: 'm0sWiC9yvgm5nnmMchHHTZV9LPnHX8Ca',
      //     database: 'instance',
      //   });
      const sequelize = new Sequelize(
        process.env.DB_HOST,
        { dialect: 'postgres' },
      );
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
