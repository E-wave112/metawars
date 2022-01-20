import Joi from 'joi'

class CharacterInputValidator {

    public movieInputValidator = Joi.object().keys({
        movie: Joi.string().required().messages({
            "string.base": `"movie" should be of type 'string'`,
            "string.empty": `"movie" cannot be an empty field`,
        })
    })
}

export default new CharacterInputValidator()