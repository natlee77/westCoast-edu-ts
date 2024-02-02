import { fetchData } from "../utilities/http.js";
export async function listAllUsers() {
    const result = await fetchData('/users');
    return result;
}
//  localhost:3000/users?name_like=rist&education_like=high 
export async function searchUser(criteria) {
    const result = await fetchData(`/users?firstName_like=${criteria}&lastName_like=${criteria}`);
    //  await fetchData('/users?firstName_like=',criteria )  ;
    return result;
}
