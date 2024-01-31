import { fetchData } from "../utilities/http.js";
export async function listAllCourses() {
    const result = await fetchData('/courses');
    return result;
}
//Click on Picture
export const addImageClickHandler = (images) => {
    console.log('img', images);
    images.forEach((image) => {
        console.log('img', image);
        const src = image.getAttribute('src');
        const courseId = image.getAttribute('id');
        image.addEventListener('click', () => {
            console.log('loc', location.search);
            //query string
            location.href = `./pages/course-details.html?id=${courseId}`;
        });
    });
};
// export async function searchCourse( criteria: string) : Promise<ResponseModel>{
//     const result = await fetchData('/courses',criteria)  ;
//     return result;
// }
