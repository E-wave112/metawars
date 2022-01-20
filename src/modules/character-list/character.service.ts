import { CrudService } from "../../common/utils/services/crud.service";
import { Movie } from "../movies/movies.entity";
import AxiosService from "../../common/utils/services/axios.service";
import { throwError } from "../../common/utils/error";
import CustomClass from '../../common/utils/custom'

class CharacterListService extends CrudService {
    public entity = Movie
    public axiosService = AxiosService
    public customClass = CustomClass

    public getCharacterList = async (movie: object, queryparam?: string | number, queryparam2?: string | number) => {
        try {
            const getMovie = await this.findOne(movie)
            if (!getMovie) throwError("movie not found!")
            // get the urls of the character-list from the characterlist column
            let characters: object[] = []
            const characterLists = getMovie.characterList
            for (let char = 0; char < characterLists.length; char++) {
                const axiosResponse = await this.axiosService.fetchData(characterLists[char])
                characters.push(axiosResponse.data)
            }
            console.log(characters)

            let sortedCharacters = characters
            // sort characters by various params
            sortedCharacters = this.customClass.customSort(characters, queryparam)
            if (!queryparam) sortedCharacters = characters
            let filteredCharacters;
            // filter characters by various params
            filteredCharacters = this.customClass.customFilter(sortedCharacters, queryparam2)
            if (!queryparam2) filteredCharacters = sortedCharacters


            // filteredCharacters = this.customClass.customFilter(sortedCharacters, queryparam2) ? this.customClass.customFilter(sortedCharacters, queryparam2) : sortedCharacters
            // return the total height and number of characters
            const totalHeights = this.customClass.getSumOfHeights(filteredCharacters)
            const totalCharacters = filteredCharacters.length
            return {
                filteredCharacters, metadata: {
                    totalHeights, totalCharacters
                }
            }

        } catch (err: any) {
            console.error(err)
            throwError(err.message)
        }

    }

}

export default new CharacterListService()