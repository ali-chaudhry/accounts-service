import * as config from 'dotenv';
import * as path from 'path';
import { Admin } from 'src/admin/entities/admin.entity';
import { Supplier } from 'src/supplier/entities/supplier.entity';
import { User } from 'src/user/entities/user.entity';

const NODE_ENV = process.env.NODE_ENV;
const envFile = path.resolve(
  process.cwd(),
  `.env${NODE_ENV ? `.${NODE_ENV}` : ''}`,
);

process.env = { ...process.env, ...config.config({ path: envFile }).parsed };
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  postgresUsersDb: {
    type: 'postgres',
    host: process.env.DB_USERS_HOST,
    port: process.env.DB_USERS_PORT,
    username: process.env.DB_USERS_USER,
    password: process.env.DB_USERS_PASSWORD,
    database: process.env.DB_USERS_NAME,
    entities: [User],
    ssl: false,
    synchronize: false,
    keepConnectionAlive: true,
    migrationsTableName: 'users_migrations_typeorm',
    migrationsRun: true,
    subscribers: ['src/users/*.subscriber.ts'],
    migrations: ['src/users/migrations/*.ts'],
    cli: { migrationsDir: 'src/users/migrations' },
  },
  postgresAdminsDb: {
    type: 'postgres',
    host: process.env.DB_ADMIN_HOST,
    port: process.env.DB_ADMIN_PORT,
    username: process.env.DB_ADMIN_USER,
    password: process.env.DB_ADMIN_PASSWORD,
    database: process.env.DB_ADMIN_NAME,
    entities: [Admin],
    migrations: ['src/admins/migration/*.ts'],
    migrationsTableName: 'admins_migrations_typeorm',
    subscribers: ['src/admins/*.subscriber.ts'],
    cli: { migrationsDir: 'src/admins/migrations' },
    migrationsRun: true,
    ssl: false,
    synchronize: false,
    keepConnectionAlive: true,
  },
  mysqlSuppliersDb: {
    type: 'mysql',
    host: process.env.DB_ADMIN_HOST,
    port: process.env.DB_ADMIN_PORT,
    username: process.env.DB_ADMIN_USER,
    password: process.env.DB_ADMIN_PASSWORD,
    database: process.env.DB_ADMIN_NAME,
    entities: [Supplier],
    migrations: ['src/suppliers/migration/*.ts'],
    migrationsTableName: 'suppliers_migrations_typeorm',
    subscribers: ['src/suppliers/*.subscriber.ts'],
    cli: { migrationsDir: 'src/suppliers/migrations' },
    migrationsRun: true,
    ssl: false,
    synchronize: false,
    keepConnectionAlive: true,
  },
  googleAnalytics: {
    clientEmail: process.env.GOOGLE_ANALYTICS_CLIENT_EMAIL,
    clientSecret: process.env.GOOGLE_ANALYTICS_CLIENT_SECRET,
  },
});
