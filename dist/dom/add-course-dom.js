import { createCourse } from "../forms/html-forms.js";
import { addCoursePOST } from "../utilities/http.js";
import { convertFormDataToJson } from "../utilities/utilities.js";
const form = document.querySelector('#addCourseForm');
const card = document.querySelector('#contact-form');
async function initPage() {
    card.appendChild(createCourse());
}
function addCourse(e) {
    e.preventDefault();
    //  create new object (course)..
    const course = new FormData(form);
    // console.log(...course);
    const obj = convertFormDataToJson(course);
    saveCourse(obj);
}
async function saveCourse(course) {
    addCoursePOST(course);
    //   // redirect
    location.href = '../admin.html';
}
document.addEventListener('DOMContentLoaded', initPage);
//add submit to form 
form.addEventListener('submit', addCourse);
