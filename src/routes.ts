import { Request, Response, Router } from "express";
import characterRoutes from "./modules/character-list/character.routes";
import commentsRoutes from "./modules/comments/comments.router";
import moviesRoutes from "./modules/movies/movies.routes";
class allRoutes {
    public router: Router = Router();

    constructor() {
        this.initRoutes()
    }

    private initRoutes(): void {
        this.router.use("/test", (req: Request, res: Response) => {
            res.status(200).send('hello world!')
        });
        this.router.use('/movies',moviesRoutes)
        this.router.use('/comments',commentsRoutes)
        this.router.use('/character-list',characterRoutes)
    }

}

export default new allRoutes().router;