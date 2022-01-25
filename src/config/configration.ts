export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    //  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    //migrationsTableName: 'migrations_typeorm',
    //migrationsRun: true,
    ssl: false,
    synchronize: false,
  },
});
