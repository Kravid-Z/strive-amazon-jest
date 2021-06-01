import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
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

mongoose
  .connect(process.env.MONGO_ATLAS + "Amazon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    server.listen(port, () => {
      console.log("The server's power level is over ", port);
    })
  );
console.table(listEndpoints(server));

export default server