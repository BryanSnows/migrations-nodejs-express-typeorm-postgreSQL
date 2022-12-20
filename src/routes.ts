import { Router } from "express";
import { CreateCategoryController } from "./controller/CreateCategoryController";
import { CreateVideoController } from "./controller/CreateVideoController";
import { DeleteCategoryController } from "./controller/DeleteCategoryController";
import { GetAllCategoryController } from "./controller/GetAllCategoryController";
import { UpdateCategoryController } from "./controller/UpdateCategoryController";

const routes = Router()

routes.post("/categories", new CreateCategoryController().handle)
routes.get("/categories", new GetAllCategoryController().handle)
routes.delete("/categories/:id", new DeleteCategoryController().handle)
routes.put("/categories/:id", new UpdateCategoryController().handle)


routes.post("/videos", new CreateVideoController().handle)

export {routes};