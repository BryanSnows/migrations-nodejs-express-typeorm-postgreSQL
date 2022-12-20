import AppDataSource from "../data-source";
import { Category } from "../entities/Category";


export class DeleteCategoryService {
    async execute(id: any) {

        const repository = AppDataSource.getRepository(Category)
       /* if (!(await repository.findOne(id))) {
            return new Error("Category does not exists")
        }*/

        await repository.delete(id);
    }
}