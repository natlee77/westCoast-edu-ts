import { Course } from "../models/CourseType.js";
import { ResponseModel } from "../models/ResponseModel.js";
import { listAllCourses, searchCourse } from "../services/courses.js";
import { createCoursesList } from "../forms/html-courses.js";

const coursesList = document.getElementById('courses-list') as HTMLDivElement;

document.querySelector<HTMLFormElement>('#searchForm')!
        .addEventListener('submit', onSearch);

const initPage = async() => {    
    listCourses();

    //add click event in list
   const cardsList=document.querySelectorAll('#courses-list div '); 
   cardsList.forEach(card=>{
       card.addEventListener('click',selectedCard)
   })
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
    displayCourses(result as unknown as [Course]);
  }
  async function onSearch(e: SubmitEvent): Promise<void> {
    e.preventDefault();
    listCourses();
  }

  function displayCourses(courses: [Course]) {
    coursesList.innerHTML = "";
    for (let course of courses) {
         coursesList.appendChild(createCoursesList(course));
    }
  }
  const selectedCard = (event:any)=>{
    let kursId = 0;
    //target- localName  === div||span
     console.log(event.target.localName);

    if (event.target.localName === 'div'){
        kursId = event.target.getAttribute('kursId');
        
    }else if (event.target.localName === 'span'){
        kursId = event.target.parentElement.getAttribute('kursId');
       
    }
     //redirect => to edit.html
     location.href = `./edit-course.html?id=${kursId}`;
}



document.addEventListener("DOMContentLoaded",initPage);
 

