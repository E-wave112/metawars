import { throwError } from "../../common/utils/error";
import { CrudService } from "../../common/utils/services/crud.service";
import { Comments } from "./comments.entity";

class CommentService extends CrudService {
    public entity = Comments
    
    public addComments = async (obj:object) => {
        try {
            const newComments = await this.create(obj)
            return newComments
        } catch (err) {
            console.error(err)
            throwError(err.message)
        }
    }

    public getComments = async () => {
        try {
            const allComments = await this.all()
            // sort in reverse chronological order
            return allComments.reverse()
        } catch (err:any) {
            console.error(err)
            throwError(err.message)
        }
    }

}

export default new CommentService()