import { fetchData } from "../utilities/http.js";
export async function listAllCourses() {
    const result = await fetchData('/courses');
    return result;
}
// export async function searchCourse( criteria: string) : Promise<ResponseModel>{
//     const result = await fetchData('/courses',criteria)  ;
//     return result;
// }
