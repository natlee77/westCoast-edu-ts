import { fetchData } from '../utilities/http.js';
export async function getCourse(id) {
    const result = await fetchData('/courses/' + id);
    return result;
}
