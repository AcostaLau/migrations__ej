import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions =
{
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'lauti',
    password: 'admin123',
    database: 'mi_tienda',
    entities: ['**/*.entity{.ts,.js}'],
    migrations: ['db/migrations/*.js,.ts'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;