import { Router } from "express";
import { CreateCategoryController } from "./controller/CreateCategoryController";
import { GetAllCategoriesController } from "./controller/GetAllCategoryController";

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoriesController().handle)

export {routes};