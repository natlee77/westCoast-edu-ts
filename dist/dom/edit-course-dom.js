import { editCourse } from '../forms/html-forms.js';
import { getCourse } from "../services/course-detail.js";
import { updateCoursePUT, deleteCourseMethod } from '../utilities/http.js';
import { convertFormDataToJson } from '../utilities/utilities.js';
const editcard = document.querySelector('#contact-form');
const form = document.querySelector('#editCourseForm');
const deletebtn = document.querySelector('#delete');
async function init() {
    const courseId = location.search.split('=')[1];
    // console.log(courseId);
    editcard.appendChild(editCourse());
    getById(+courseId);
}
;
const getById = async (id) => {
    const course = await getCourse(id);
    //id editCourseForm
    loadDataToForm(course);
};
const loadDataToForm = (course) => {
    const formElements = form.elements;
    formElements["title"].value = course.title;
    formElements["number"].value = course.number;
    formElements["days"].value = course.days;
    formElements["start"].value = course.start;
    formElements["rating"].value = course.rating;
    formElements["price"].value = course.price;
    formElements["type"].value = course.type;
    formElements["imageUrl"].value = course.imageUrl;
    formElements["description"].value = course.description;
};
const updateCourse = async (e) => {
    e.preventDefault();
    const updatecourse = new FormData(form);
    const obj = convertFormDataToJson(updatecourse);
    await updateCoursePUT(obj, courseId);
    //     //redirect  
    location.href = '../admin.html';
};
const deleteCourse = async () => {
    await deleteCourseMethod(courseId);
    //     //redirect  
    location.href = '../admin.html';
};
const courseId = new URLSearchParams(window.location.search).get("id");
document.addEventListener('DOMContentLoaded', init);
form.addEventListener('submit', updateCourse);
deletebtn.addEventListener('click', deleteCourse);
