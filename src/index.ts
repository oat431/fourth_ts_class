import express, {urlencoded, json} from 'express';

import healthCheckRouter from './module/HealthCheck/router/health-check.router.js';

const PORT = process.env.PORT || 8080;
const app = express();


app.use(urlencoded({extended: true}));

app.use("/api/v1", healthCheckRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(PORT, () => {
    console.info(`Server is running on : http://localhost:${PORT}`);
});
