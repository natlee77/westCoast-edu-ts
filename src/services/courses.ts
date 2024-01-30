import { fetchData } from "../utilities/http.js";
import { ResponseModel } from '../models/ResponseModel.js';

export async function listAllCourses() : Promise<ResponseModel>{
    const result = await fetchData('/courses')  ;
    return result;
}

// export async function searchCourse( criteria: string) : Promise<ResponseModel>{
//     const result = await fetchData('/courses',criteria)  ;
//     return result;
// }