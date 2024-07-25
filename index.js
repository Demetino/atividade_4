import express, { json, request, response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { livrosControllerDelete, livrosControllerGetAll, livrosControllerGetById, livrosControllerPost, livrosControllerPut } from "./controllers/livrosController.js";
import swaggerUi from "swagger-ui-express";
//import swaggerAutogen from 'swagger-autogen';
//import swaggerDocument from './docs/swagger-output.json';
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
app.use(express.json());
dotenv.config();

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Documentação da API',
        version: '1.0.0',
      },
    },
    apis: ['./index.js'], // files containing annotations as above
  };
  
  const openapiSpecification = swaggerJSDoc(options);

//CONEXAO COM O BANCO NOSQL MONGO_DB
mongoose.connect(process.env.BANCO_DE_DADOS?process.env.BANCO_DE_DADOS : "");

/**
 * @openapi
 * /:
 *   get:
 *     description: Retorna todos os Livros. 
 *     responses:
 *       200:
 *         description: 
 */  
//METODO GET ALL
app.get("/livros", livrosControllerGetAll);

//METODO GET BY ID
app.get("/livros/:id",livrosControllerGetById);
/**
 * @openapi
 * /:
 *   post:
 *     description: Insere Livros. 
 *     responses:
 *       200:
 *         description: 
 */  
//METODO POST 
app.post("/livros",livrosControllerPost);

//METODO PUT
app.put("/livros/:id", livrosControllerPut);

//METODO DELETE
app.delete("/livros/:id", livrosControllerDelete);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(3333, () => console.log("Servidor iniciado!"));