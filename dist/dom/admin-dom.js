import { listAllCourses, searchCourse } from "../services/courses.js";
import { createDiv, createSpan } from "../forms/html-courses.js";
const coursesList = document.getElementById('courses-list');
const cardsList = document.querySelectorAll('#courses-list div');
document.querySelector('#searchForm')
    .addEventListener('submit', onSearch);
const initPage = async () => {
    await listCourses();
};
async function listCourses() {
    let result;
    //search
    let query = document.querySelector('#searchInput').value;
    if (query) {
        result = await searchCourse(query);
    }
    else {
        result = await listAllCourses();
    }
    displayCourses(result);
    ;
}
async function onSearch(e) {
    e.preventDefault();
    listCourses();
}
function displayCourses(courses) {
    coursesList.innerHTML = "";
    for (let course of courses) {
        coursesList.appendChild(createCourseList(course));
    }
}
const addClickHandler = (element) => {
    element.addEventListener('click', () => {
        const courseId = element.getAttribute('kursid');
        if (courseId) {
            console.log(courseId);
            location.href = `./pages/edit-course.html?id=${courseId}`;
        }
    });
};
const createCourseList = (course) => {
    const container = createDiv();
    const imageAnchor = document.createElement('a');
    container.appendChild(imageAnchor);
    imageAnchor.href = `../pages/edit-course.html?id=${course.id}`;
    container.setAttribute('kursId', course.id);
    container.appendChild(createSpan(course.title, 'title')).style.fontWeight = 'bold';
    ;
    container.appendChild(createSpan(course.type, 'type'));
    container.appendChild(createSpan(`Start: ${course.start}`, 'start'));
    container.appendChild(createSpan(`Lenght: ${course.days} days `, 'days'));
    addClickHandler(container);
    return container;
};
document.addEventListener("DOMContentLoaded", initPage);
