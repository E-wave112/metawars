import { Router } from "express";
import commentsController from "./comments.controller";
import validator from "../../middleware/validator";
import commentsValidator from "./comments.validator";
// import moviesController from "./movies.controller";

class CommentRoutes {
    public router: Router
    constructor() {

        this.router = Router()
        this.routes()
        
    }

    private routes(): void {

        this.router.post('/new', 
        validator.useBodyValidator(commentsValidator.addCommentsValidator),
        commentsController.addCommentsController)

        this.router.get('/all', commentsController.getAllCommentsController)
    }
}

export default new CommentRoutes().router