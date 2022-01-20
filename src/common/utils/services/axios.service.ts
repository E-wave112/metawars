import axios from 'axios'
import { throwError } from '../error'

class AxiosService {
    public fetchData = async (url: string): Promise<any> => {
        try {
            const response = await axios.get(url)
            return response
        } catch (err: any) {
            console.error(err)
            throwError(err.message)
        }
    }
}

export default new AxiosService()