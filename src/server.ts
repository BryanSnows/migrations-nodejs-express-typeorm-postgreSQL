import "reflect-metadata";
import AppDataSource from "./data-source";
import express from "express";
import { routes } from "./routes";

const app = express();

app.listen(3000, () => console.log("Server ir runnig"))

app.use(express.json())
app.use(routes)

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })