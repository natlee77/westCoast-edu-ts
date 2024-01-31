 
// import { ResponseModel } from '../models/ResponseModel.js';
import { Course, CourseType } from '../models/CourseType.js';
import { listAllCourses, addImageClickHandler } from '../services/courses.js';
import { createCard  } from '../forms/html-courses.js';

  
const gallery = document.querySelector('#courses-gallery') as HTMLDivElement ;

async function initPage() { 
    listCourses(); 
  // Hämta in alla bilder 
    const images = document.querySelectorAll('.course-image img');
  // knyt en klick händelse till varje bild..
    addImageClickHandler(images ); 
}
async function listCourses( ) {

const res = await listAllCourses();
console.log('list', res  );
  displayCourses( res as unknown as [Course ]  );
}    

function displayCourses(courses:[Course ] )  {   
 gallery.innerHTML="";
 for (let kurs of courses) {
   gallery.appendChild(createCard(kurs ));  
 }
  }    
document.addEventListener('DOMContentLoaded', initPage);
