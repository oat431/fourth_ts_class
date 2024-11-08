import swaggerJsDoc from 'swagger-jsdoc';

const PORT = process.env.PORT || 8080;

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Ex TS API Doc Template',
            version: '1.0.0',
            description: 'Express Typescript API Documentation Template',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./src/module/HealthCheck/router/*.ts'], // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
export default swaggerDocs;
