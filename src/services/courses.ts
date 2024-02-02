import { fetchData } from "../utilities/http.js";
import { ResponseModel } from '../models/ResponseModel.js';

export async function listAllCourses() : Promise<ResponseModel>{
    const result = await fetchData('/courses')  ;
    return result;
}
 

//http://localhost:3000/courses?title_like=it
export async function searchCourse( criteria: string) : Promise<ResponseModel>{
    const result = await fetchData('/courses?title_like=',criteria)  ;
    console.log('cr', criteria);
    
    return result;
}