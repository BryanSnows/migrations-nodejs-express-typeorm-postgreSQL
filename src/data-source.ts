import { DataSource } from "typeorm"
import "dotenv/config" 

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [
        process.env.TYPEORM_ENTITIES,
        process.env.TYPEORM_ENTITIES_DIR,
    ],
    migrations: [
        process.env.TYPEORM_MIGRATIONS, 
        process.env.TYPEORM_MIGRATIONS_DIR
    ],
    synchronize: false
})

export default AppDataSource