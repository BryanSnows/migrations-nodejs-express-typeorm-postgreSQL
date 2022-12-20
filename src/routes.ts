import { Router } from "express";
import { CreateCategoryController } from "./controller/CreateCategoryController";
import { DeleteCategoryController } from "./controller/DeleteCategoryController";
import { GetAllCategoryController } from "./controller/GetAllCategoryController";

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoryController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)

export {routes};