import { listAllCourses, searchCourse } from '../services/courses.js';
import { createCard } from '../forms/html-courses.js';
const gallery = document.querySelector('#courses-gallery');
document.querySelector('#searchForm')
    .addEventListener('submit', onSearch);
async function initPage() {
    listCourses();
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
