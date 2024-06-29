import dotenv from "dotenv";

dotenv.config();

const mongo_url = process.env.MONGO_URL as string || "URL_No_Valid" ;

const server_port = process.env.PORT;

export { mongo_url, server_port };
