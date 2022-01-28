import * as config from 'dotenv';
import * as path from 'path';

const NODE_ENV = process.env.NODE_ENV;
const envFile = path.resolve(
  process.cwd(),
  `.env${NODE_ENV ? `.${NODE_ENV}` : ''}`,
);

process.env = { ...process.env, ...config.config({ path: envFile }).parsed };

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: ['src/migration/*.ts'],
    migrationsTableName: 'migrations_typeorm',
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
