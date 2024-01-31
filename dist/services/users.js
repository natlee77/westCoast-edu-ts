import { fetchData } from "../utilities/http.js";
export async function listAllUsers() {
    const result = await fetchData('/users');
    return result;
}
