import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: 'API Livros',
    description: 'Description'
  },
  host: 'localhost:3000',
  consumes: ['application/json'],             
  produces: ['application/json']             
};


const outputFile = './swagger-output.json';
const endpointFiles = '../index.js'; 
//const routes = ['./path/userRoutes.js', './path/bookRoutes.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, endpointFiles, doc).then(async () => {
  await import('../index.js'); // Your project's root file
});