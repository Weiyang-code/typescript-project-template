import { knex } from 'knex';
import config from 'config';
import type { Config } from '@/types/database';

const pgConfig = config.get<Config>('postgres')

const client = knex({
    client: 'pg',
    connection: {
        host: pgConfig.host,
        port: pgConfig.port,
        user: pgConfig.user,
        database: pgConfig.database,
        password: pgConfig.password,
    },
    pool: { min: 1, max: 5 },
});

export default client;