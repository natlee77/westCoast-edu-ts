import { editCourse } from '../forms/html-forms.js';
import { getCourse } from "../services/course-detail.js";
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
    // console.log('c', course);
    //id editCourseForm
    loadDataToForm(course);
};
// URLSearchParams()-generate query parameters(string)
const loadDataToForm = (course) => {
    console.log('form-elements', form.elements);
    const entries = new URLSearchParams(course).entries();
    console.log('entries', ...entries);
    for (let [key, value] of entries) {
        if (key !== 'id') {
            const inne = form.elements[key];
            inne.value = value;
            console.log(key);
            // console.log(value);
        }
    }
};
const updateCourse = async (e) => {
    e.preventDefault();
    //     const course = new FormData(form);  
    //     const obj = convertFormDataToJson(course);  
    //     const url = `http://localhost:3000/courses/${kursid}`;
    //     const http = new HttpClient(url);  
    //     await http.update(obj);
    //     //redirect  
    //      location.href = './admin.html';
};
const deleteCourse = async () => {
    //     const url = `http://localhost:3000/courses/${kursid}`;
    //     const http = new HttpClient(url);
    //     await http.delete( );
    //     //redirect  
    //     location.href = './admin.html';
};
document.addEventListener('DOMContentLoaded', init);
form.addEventListener('submit', updateCourse);
deletebtn.addEventListener('click', deleteCourse);
