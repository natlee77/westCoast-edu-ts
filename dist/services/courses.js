import { fetchData } from "../utilities/http.js";
export async function listAllCourses() {
    const result = await fetchData('/courses');
    return result;
}
//http://localhost:3000/courses?title_like=it
export async function searchCourse(criteria) {
    const result = await fetchData('/courses?title_like=', criteria);
    console.log('cr', criteria);
    return result;
}
