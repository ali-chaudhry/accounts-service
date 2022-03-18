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
  },
  postgresAdminsDb: {
    type: 'postgres',
    host: process.env.DB_ADMINS_HOST,
    port: process.env.DB_ADMINS_PORT,
    username: process.env.DB_ADMINS_USER,
    password: process.env.DB_ADMINS_PASSWORD,
    database: process.env.DB_ADMINS_NAME,
    entities: [Admin],
    ssl: false,
    synchronize: false,
    keepConnectionAlive: true,
  },
  mysqlSuppliersDb: {
    type: 'mysql',
    host: process.env.DB_SUPPLIERS_HOST,
    port: process.env.DB_SUPPLIERS_PORT,
    username: process.env.DB_SUPPLIERS_USER,
    password: process.env.DB_SUPPLIERS_PASSWORD,
    database: process.env.DB_SUPPLIERS_NAME,
    entities: [Supplier],
    ssl: false,
    synchronize: false,
    keepConnectionAlive: true,
  },
  googleAnalytics: {
    clientEmail: process.env.GOOGLE_ANALYTICS_CLIENT_EMAIL,
    clientSecret: process.env.GOOGLE_ANALYTICS_CLIENT_SECRET,
  },
});
