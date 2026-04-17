import client from '@/services/database/client'; // Import the shared instance
import { types } from 'pg';
import dayjs from 'dayjs';

import { createLogger } from 'logger';

const env = process.env.NODE_ENV || 'development';

const log = createLogger(`${env}.log`);

export default async () => {
    // 1. Set global parsers
    types.setTypeParser(types.builtins.NUMERIC, parseFloat);
    types.setTypeParser(types.builtins.INT8, parseInt);
    const parseDate = (str: string) => dayjs.utc(str).unix();
    types.setTypeParser(types.builtins.TIMESTAMPTZ, parseDate);
    types.setTypeParser(types.builtins.TIMESTAMP, parseDate);

    // 2. Actually test the connection
    try {
        await client.raw('SELECT 1'); 
        log.info('Database connection verified and parsers set');
    } catch (err) {
        log.error('Database failed to initialize', err);
        throw err; // Stop the app
    }
};