import { Router } from "express";
import characterController from "./character.controller";
import validator from "../../middleware/validator";
import characterValidator from "./character.validator";

class characterRoutes {
    public router: Router
    constructor() {
        this.router = Router()
        this.routes()
    }

    private routes(): void {

        this.router.get('/data',
            validator.useBodyValidator(characterValidator.movieInputValidator),
            characterController.getCharacters)
        // this.router.get('/all', moviesController.getAllMoviesController)


    }
}

export default new characterRoutes().router