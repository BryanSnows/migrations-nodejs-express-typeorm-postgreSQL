import AppDataSource from "../data-source";
import { Category } from "../entities/Category";


type CategoryUpdateRequest = {
    id: any;
    name: string;
    description: string;
};


export class UpdateCategoryService {
    async execute({id, name, description}: CategoryUpdateRequest) {
       const repository = AppDataSource.getRepository(Category);

       const category = await repository.findOne(id);
       if (!category) {
            return new Error("category does not exists");
       }

       category.name = name ? name: category.name;
       category.description = description ? description : category.description;
       await repository.save(category);

       return category
    }
}