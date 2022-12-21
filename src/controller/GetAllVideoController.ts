import { Request, Response } from "express";
import { GetAllVideService } from "../services/GetAllVideoService";


export class GetAllVideoController {
    async handle(request: Request, response: Response){
        const service = new GetAllVideService();
        const video = await service.execute()

        return response.json(video)
    }
}