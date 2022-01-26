import * as config from 'dotenv';
import * as path from 'path';
import { join } from 'path';

const NODE_ENV = process.env.NODE_ENV;
const envFile = path.resolve(
  process.cwd(),
  `.env${NODE_ENV ? `.${NODE_ENV}` : ''}`,
);

process.env = { ...process.env, ...config.config({ path: envFile }).parsed };

console.log(process.env.NODE_ENV, process.env.DB_HOST);

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [join(__dirname + '/../**/*.entity{.ts,.js}')],
    //entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: ['src/migration/*{.ts,.js}'],
    migrationsTableName: 'migrations_typeorm',
    migrationsRun: true,
    ssl: false,
    synchronize: false,
    keepConnectionAlive: true,
    //autoLoadEntities: true,
  },
});
