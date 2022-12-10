import "reflect-metadata";
import AppDataSource from "./data-source";
import express from "express";

const app = express();

app.listen(3000, () => console.log("Server ir runnig"))

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })