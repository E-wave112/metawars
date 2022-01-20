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
        // this.router.get('/:id', privateDealsController.getSinglePrivateDealController)
        // this.router.get('/', privateDealsController.getAllPrivateDealsController)
        // this.router.get('/popular', privateDealsController.getPopularPrivateDealsController)

    }
}

export default new MovieDataRoutes().router