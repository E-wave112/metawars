import { getRepository } from "typeorm";
import { STARWARS_BASE_URL } from "../../common/utils/constants";
import { throwError } from "../../common/utils/error";
import AxiosService from "../../common/utils/services/axios.service";
import { CrudService } from "../../common/utils/services/crud.service";
import { Movie } from "./movies.entity";
import CustomClass from '../../common/utils/custom'

class MovieService extends CrudService {
    public entity = Movie
    public customClass = CustomClass

    public bulkInsertToDB = async (): Promise<any> => {

        try {
            const movieData = await AxiosService.fetchData(`${STARWARS_BASE_URL}/api/films`)
            console.log(movieData.data.results)
            movieData.data.results.forEach(async (movie) => {
                try {
                    await this.create({
                        movieName: movie.title,
                        crawls: movie.opening_crawl,
                        characterList: movie.characters,
                        releaseDate: movie.release_date
                    })
                    return;
                }
                catch (error) {
                    console.error(error)
                    throwError(error.message)
                }
            });
            return "movie data added successfully"
        } catch (err: any) {
            console.error(err)
            throwError(err.message)
        }

    }

    public getAllMovies = async () => {
        try {
            let movies: (Movie | any)[] = await this.all()
            if (movies.length === 0) throwError("there are no movies currently", 404)
            const sortedMovies = this.customClass.customSort(movies, "releaseDate")
            return sortedMovies
        } catch (err: any) {
            console.error(err)
            throwError(err.message)
        }
    }
}


export default new MovieService()