import AppDataSource from "../data-source";
import { Category } from "../entities/Category";

export class GetAllCategoriesService {
    async execute() {
        const repository = AppDataSource.getRepository(Category);
        const categories = await repository.find();

        return categories
    }
}