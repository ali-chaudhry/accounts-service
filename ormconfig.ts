import * as config from 'dotenv';
import { Admin } from 'src/admin/entities/admin.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';
import { User } from 'src/user/entities/user.entity';

const envFile = '/tmp/env';

process.env = { ...process.env, ...config.config({ path: envFile }).parsed };

export = [
  {
    name: 'pg1',
    type: 'postgres',
    host: process.env.DB_USERS_HOST,
    port: process.env.DB_USERS_PORT,
    username: process.env.DB_USERS_USER,
    password: process.env.DB_USERS_PASSWORD,
    database: process.env.DB_USERS_NAME,
    entities: [User],
    migrations: ['src/migrations/users/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations/users',
    },
    migrationsTableName: 'migrations_typeorm_users',
    migrationsRun: true,
    ssl: false,
    synchronize: false,
    keepConnectionAlive: true,
  },
  {
    name: 'pg2',
    type: 'postgres',
    host: process.env.DB_ADMINS_HOST,
    port: process.env.DB_ADMINS_PORT,
    username: process.env.DB_ADMINS_USER,
    password: process.env.DB_ADMINS_PASSWORD,
    database: process.env.DB_ADMINS_NAME,
    entities: [Admin],
    migrations: ['src/migrations/admins/*{.ts,.js}'],
    migrationsTableName: 'migrations_typeorm_admins',
    cli: {
      migrationsDir: 'src/migrations/admins',
    },
    migrationsRun: true,
    ssl: false,
    synchronize: false,
    keepConnectionAlive: true,
  },
  {
    name: 'default',
    type: 'mysql',
    host: process.env.DB_SUPPLIERS_HOST,
    port: process.env.DB_SUPPLIERS_PORT,
    username: process.env.DB_SUPPLIERS_USER,
    password: process.env.DB_SUPPLIERS_PASSWORD,
    database: process.env.DB_SUPPLIERS_NAME,
    entities: [Supplier],
    migrations: ['src/migrations/suppliers/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations/suppliers',
    },
    migrationsTableName: 'migrations_typeorm_suppliers',
    migrationsRun: true,
    ssl: false,
    synchronize: false,
    keepConnectionAlive: true,
  },
];
