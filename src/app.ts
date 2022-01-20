import "reflect-metadata";
import { createConnection } from "typeorm";
import { Comments } from "./modules/comments/comments.entity";
import { Movie } from "./modules/movies/movies.entity";
import express from 'express';
import allRoutes from './routes'
import morgan from 'morgan';
import { config } from "dotenv"
import { Request, Response } from "express";
config()

createConnection({
    name:"default",
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    url:process.env.DATABASE_URL,
    // database: "database-1",  
    entities: [
        Comments, Movie
    ],
    migrations: ["migration/*.js"],
    cli: {
        migrationsDir: "migration"
    },
    extra:{
        ssl:true,
    },
    synchronize: true,
    logging: true,
}).then(connection => {
    // here you can start to work with your entities
    const app = express()
    const PORT: number = Number(process.env.PORT) || 3000
    app.use(express.json())
    app.use(morgan('dev'))
    app.use('/api/v1', allRoutes)
    // for endpoints that does not exist in the api
    app.all("*", (req: Request, res: Response): any =>
        res.status(404).json({
            error: true,
            message: 'Not found'
        })
    );

    app.listen(PORT, (): void => console.log(` Database connected and this api is running on port ${PORT}`))
}).catch(error => console.error(error));