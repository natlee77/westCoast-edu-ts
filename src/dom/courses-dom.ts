import { Course } from '../models/CourseType.js';
import { listAllCourses, addImageClickHandler, searchCourse } from '../services/courses.js';
import { createCard } from '../forms/html-courses.js';
import { ResponseModel } from '../models/ResponseModel.js';


const gallery = document.querySelector('#courses-gallery') as HTMLDivElement;

document.querySelector<HTMLFormElement>('#searchForm')!
        .addEventListener('submit', onSearch);

async function initPage() {
  listCourses();
  // Hämta in alla bilder 
  const images = document.querySelectorAll('.course-image img');
  // knyt en klick händelse till varje bild..
  addImageClickHandler(images);
}
async function listCourses() {
  let result: ResponseModel;
  //search
  let query: string =
       document.querySelector<HTMLInputElement>('#searchInput')!.value; 
  if (query) {
    result = await searchCourse(query);
    console.log('query:',     result);
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
  gallery.innerHTML = "";
  for (let kurs of courses) {
    gallery.appendChild(createCard(kurs));
  }
}


document.addEventListener('DOMContentLoaded', initPage);
export {listCourses }