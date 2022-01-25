import * as config from 'dotenv';

const envFile = '/tmp/env';

process.env = { ...process.env, ...config.config({ path: envFile }).parsed };

console.log(process.env.NODE_ENV, process.env.DB_HOST);
export = {
  // ...configutations().database,
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  //entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
  ssl: false,
  synchronize: false,
  keepConnectionAlive: true,
};
