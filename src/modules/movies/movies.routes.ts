import { Router } from "express";
import moviesController from "./movies.controller";

class MovieDataRoutes {
    public router: Router
    constructor() {
        this.router = Router()
        this.routes()
    }

    private routes(): void {
        this.router.get('/', moviesController.createMovieDB)
        this.router.get('/all', moviesController.getAllMoviesController)
    }
}

export default new MovieDataRoutes().router