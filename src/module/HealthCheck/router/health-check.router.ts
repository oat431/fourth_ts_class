import { Router } from "express";
import { HealthCheckController } from "../controller/health-check.controller.js";

const healthCheckRouter = Router();
const healthCheckController = new HealthCheckController();

healthCheckRouter.get('/health-check', healthCheckController.healthCheck);

export default healthCheckRouter;