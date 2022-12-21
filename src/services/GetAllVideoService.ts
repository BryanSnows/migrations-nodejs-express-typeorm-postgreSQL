import AppDataSource from "../data-source";
import { Video } from "../entities/Video";

export class GetAllVideService {
    async execute(){
        const repository = AppDataSource.getRepository(Video)

        const video =  await repository.find({
            relations: ["category"]
        })

        return video
    }
}