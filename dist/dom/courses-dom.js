import { listAllCourses, addImageClickHandler, searchCourse } from '../services/courses.js';
import { createCard } from '../forms/html-courses.js';
const gallery = document.querySelector('#courses-gallery');
document.querySelector('#searchForm')
    .addEventListener('submit', onSearch);
async function initPage() {
    listCourses();
    // Hämta in alla bilder 
    const images = document.querySelectorAll('.course-image img');
    // knyt en klick händelse till varje bild..
    addImageClickHandler(images);
}
async function listCourses() {
    let result;
    //search
    let query = document.querySelector('#searchInput').value;
    if (query) {
        result = await searchCourse(query);
        console.log('query:', result);
    }
    else {
        result = await listAllCourses();
    }
    displayCourses(result);
}
async function onSearch(e) {
    e.preventDefault();
    listCourses();
}
function displayCourses(courses) {
    gallery.innerHTML = "";
    for (let kurs of courses) {
        gallery.appendChild(createCard(kurs));
    }
}
document.addEventListener('DOMContentLoaded', initPage);
export { listCourses };
