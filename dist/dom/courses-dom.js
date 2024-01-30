import { listAllCourses } from '../services/courses.js';
import { createCard } from '../forms/html-courses.js';
const gallery = document.querySelector('#courses-gallery');
async function initPage() {
    const courses = await listCourses();
    console.log('courses', courses);
    // courses.forEach((course) => {
    //   gallery.appendChild(createCard(course));
    // });
    // Hämta in alla bilder 
    const images = document.querySelectorAll('.course-image img');
    // knyt en klick händelse till varje bild..
    // addImageClickHandler(images);//from dom.js
}
async function listCourses() {
    const res = await listAllCourses();
    console.log('list', res);
    displayCourses(res);
}
function displayCourses(courses) {
    gallery.innerHTML = "";
    for (let kurs of courses) {
        gallery.appendChild(createCard(kurs));
        console.log('c', kurs);
    }
}
document.addEventListener('DOMContentLoaded', initPage);
