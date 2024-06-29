import mongoose from "mongoose";
import { mongo_url } from "./vars";

const db_initialization = () => {
  mongoose
    .connect(mongo_url, { dbName: "nnt_bcp" })
    .then(() => {
      console.log("Conectado a MongoDB");
    })
    .catch((error) => {
      console.error("Error al conectar a MongoDB", error);
    });
};

export default db_initialization;
