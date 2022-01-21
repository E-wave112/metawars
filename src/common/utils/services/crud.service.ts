import { getRepository } from "typeorm"
import { throwError } from "../error";

export abstract class CrudService {
    abstract entity: any
    

    /**
   * Get a single object method by id
   *
   * @param id
   * 
   */
    public get = async (id: string): Promise<any> => {
        const entity = getRepository(this.entity)
        return await entity.findOne(id)
    };

    /**
    * Get method
    * Get a single object method that matches criteria
    *
    * @param criteria
    * @param associations
    */
    public findOne = async (criteria: object): Promise<any> => {
        const entity = getRepository(this.entity)
        return await entity.findOne(criteria)
    };

    /**
 * Get all method
 * Get the array that matches filter
 *
 * @param filter
 */
    public all = async (filter: any = {}): Promise<any[]> => {
        const entity = getRepository(this.entity)
        return await entity.find(filter)
    }


    /**
 * Create method
 * create a new entity instance
 *
 * @param object
 */
    public create = async (object: any): Promise<any> => {
        const entity = getRepository(this.entity)
        try {
            let newEntity = entity.create(object)
            console.log(newEntity)
            return await entity.save(newEntity)
        } catch (e: any) {
            throwError(e.message)
        }
    };

}