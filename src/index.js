import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import server from "./server"

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
  ).catch(error => console.log(error))
console.table(listEndpoints(server));