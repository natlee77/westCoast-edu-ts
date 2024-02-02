import { createCourse } from "../forms/html-forms.js";
import { Course } from "../models/CourseType.js";
import { addCoursePOST } from "../utilities/http.js";
import { convertFormDataToJson } from "../utilities/utilities.js";

const form = document.querySelector('#addCourseForm') as HTMLFormElement;
const card = document.querySelector('#contact-form') as HTMLElement;

async function initPage() { 
  card.appendChild(createCourse());
}

function addCourse(e: any) {
  e.preventDefault();
  //  create new object (course)..
  const course = new FormData(form);
  // console.log(...course);
  const obj = convertFormDataToJson(course) ;  
  saveCourse(obj);
}

async function saveCourse(course: Course) {   
     addCoursePOST(course);
  //   // redirect
     location.href = '../admin.html'
}

document.addEventListener('DOMContentLoaded', initPage);
//add submit to form 
form.addEventListener('submit', addCourse);