import Joi from 'joi'

class CommentValidator {

    public addCommentsValidator = Joi.object().keys({
        comment: Joi.string().required().
            min(5).rule({ message: "comments must be at least five characters long" }).
            max(500).rule({ message: "comments must not exceed 500 characters!" }),
        
        movie:Joi.string().required()
    })
}

export default new CommentValidator()