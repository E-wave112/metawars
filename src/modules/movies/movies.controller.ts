import { Request, Response } from "express";
import moviesService from "./movies.service";

class MovieController {
    public service = moviesService

    public createMovieDB = async (req: Request, res: Response) => {
        try {
            const movieDB = await moviesService.bulkInsertToDB()
            return res.status(200).json({
                message: "data added successfully",
                movieDB
            })
        } catch (err: any) {
            console.error(err)
            return res.status(500).json({ message: err.message })
        }
    }

    public getAllMoviesController = async (req: Request, res: Response) => {
        try {
            const allMovies = await this.service.getAllMovies()
            return res.status(200).json({ allMovies })
        } catch (err: any) {
            console.error(err)
            return res.status(500).json({ message: err.message })
        }
    }
}

export default new MovieController()