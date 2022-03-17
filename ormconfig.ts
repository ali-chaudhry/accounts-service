import * as config from 'dotenv';

const envFile = '/tmp/env';

process.env = { ...process.env, ...config.config({ path: envFile }).parsed };

export = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
  ssl: false,
  synchronize: false,
  keepConnectionAlive: true,
};
