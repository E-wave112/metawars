import characterService from "./character.service";
import { Request,Response } from "express";

class CharacterListControllers {
    public service = characterService

    public getCharacters = async (req:Request,res:Response) => {

        try {
            let getCharData;
            const sortOptions = req.query.sort 
            const filterOptions = req.query.filter
            // if (!options){
            //     getCharData = await this.service.getCharacterList({movieName:req.body.movie})
            // }
            getCharData = await this.service.getCharacterList({movieName:req.body.movie}, sortOptions as string,filterOptions as string)
            return res.status(200).json({data:getCharData})
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: error.message })
        }
    }
}

export default new CharacterListControllers()