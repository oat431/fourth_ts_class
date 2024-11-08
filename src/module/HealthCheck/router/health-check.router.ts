import { Router } from 'express';
import { HealthCheckController } from '../controller/health-check.controller.js';

const healthCheckRouter = Router();
const healthCheckController = new HealthCheckController();

/**
 * @swagger
 * /api/v1/health-check:
 *   get:
 *     summary: Health check API
 *     description: Health check API!
 *     responses:
 *       200:
 *         description: Success
 */
healthCheckRouter.get('/health-check', healthCheckController.healthCheck);

export default healthCheckRouter;
