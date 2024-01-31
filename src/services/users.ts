import { fetchData } from "../utilities/http.js";
import { ResponseModel } from '../models/ResponseModel.js';

export async function listAllUsers() : Promise<ResponseModel>{
    const result = await fetchData('/users')  ;
    return result;
}
 