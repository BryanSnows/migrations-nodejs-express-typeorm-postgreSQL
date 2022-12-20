import { GetAllCategoriesService } from "../services/GetAllCategoryService";
import { Request, Response } from "express";


export class GetAllCategoryController {
    async handle(request: Request, response: Response){
        const service = new GetAllCategoriesService();
        const categories = await service.execute();

        return response.json(categories)
    }
}