// src/loaders/index.ts
import postgresLoader from './postgres';
import mongoDBLoader from './mongodb';
import expressLoader from './express';
import { createLogger } from 'logger';
import { Application } from 'express';

const env = process.env.NODE_ENV || 'development';

export default async ({ expressApp }: { expressApp: Application }) => {
    const log = createLogger(`${env}.log`);

    // choose mongoDB or postgres as database
    await mongoDBLoader();
    // await postgresLoader(); 

    await expressLoader({ app: expressApp });
    log.info('Express loaded');

};