import express from 'express';
import dayjs from 'dayjs';
import config from 'config';
import loaders from './loaders';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import duration from 'dayjs/plugin/duration';
import listEndpoints from 'express-list-endpoints';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);
dayjs.tz.setDefault('Asia/Kuala_Lumpur');

const testVariable = 123;

async function startServer() {
    const app = express();

    // Call the master loader
    await loaders({ expressApp: app });

    const port = config.get('api.port');
    app.listen(port, () => {
        console.log(`🚀 Server listening on port ${port}. Routes:`, listEndpoints(app)
            .sort(({ path: a }, { path: b }) => (a < b ? -1 : a > b ? 1 : 0))
            .map(({ path, methods }) => `${methods.toString().padEnd(8)}:${path}`));
    });
}

startServer();