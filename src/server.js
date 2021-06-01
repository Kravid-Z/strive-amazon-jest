import express from "express";
import cors from "cors";
import productsRouter from "./api/products/index.js";


import {
  notFoundHandler,
  unauthorizedHandler,
  forbiddenHandler,
  badRequestHandler,
  catchAllHandler,
} from "./errorHandling.js";


const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use("/products", productsRouter);

server.use(notFoundHandler);
server.use(unauthorizedHandler);
server.use(forbiddenHandler);
server.use(badRequestHandler);
server.use(catchAllHandler);



export default server