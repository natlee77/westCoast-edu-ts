import { Course } from "../models/CourseType.js";
import { ResponseModel } from "../models/ResponseModel.js";
import { listAllCourses, searchCourse } from "../services/courses.js";
import {   createDiv, createSpan } from "../forms/html-courses.js";

const coursesList = document.getElementById('courses-list') as HTMLDivElement;
 const cardsList = document.querySelectorAll('#courses-list div')  ; 

document.querySelector<HTMLFormElement>('#searchForm')!
        .addEventListener('submit', onSearch);

const initPage = async() => {    
   await listCourses();
   
}
async function listCourses() {
    let result: ResponseModel;
    //search
    let query: string =
         document.querySelector<HTMLInputElement>('#searchInput')!.value; 
    if (query) {
      result = await searchCourse(query);       
    } else {
      result = await listAllCourses();
    }   
   displayCourses(result as unknown as [Course]) ;
   ;
  }
  async function onSearch(e: SubmitEvent): Promise<void> {
    e.preventDefault();
    listCourses();
  }

  function displayCourses(courses: [Course]) {
    coursesList.innerHTML = "";   
    for (let course of courses) {
         coursesList.appendChild(createCourseList(course));    
    }
  }
 
const addClickHandler = (element: HTMLElement): void => {
  element.addEventListener('click', () => {
      const courseId = element.getAttribute('kursid');
      if (courseId) {
          console.log(courseId);
          location.href = `./pages/edit-course.html?id=${courseId}`;
      }
  });
};
  const createCourseList = (course: Course) => {

  const container:HTMLElement= createDiv();
  const imageAnchor = document.createElement('a');
  container.appendChild(imageAnchor);  
  imageAnchor.href = `../pages/edit-course.html?id=${course.id}`;
  container.setAttribute('kursId',  course.id);
  container.appendChild(createSpan(course.title, 'title')).style.fontWeight = 'bold'; ;

  container.appendChild(createSpan(course.type, 'type'));
  container.appendChild(createSpan(`Start: ${course.start}`, 'start'));
  container.appendChild(createSpan(`Lenght: ${course.days} days `, 'days'));

  addClickHandler (container) ;
  return container;

};

document.addEventListener("DOMContentLoaded",initPage);
 

