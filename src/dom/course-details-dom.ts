import { createCourseDetails } from '../forms/html-courses.js';
import { getCourse } from '../services/course-detail.js';
import { getAllUsers, getFromLocalStorage } from '../utilities/utilities.js';
import { createStudentsDetails } from '../forms/html-users.js';
import { patchCourseUser } from '../utilities/http.js';
import { User } from '../models/UserType.js'; 

const studentsHTML = document.getElementById('students') as HTMLDivElement;
const aboutcourse = document.querySelector('#about-course') as HTMLDivElement;


const initPage = async () => {

  const courseId = location.search.split('=')[1];
  //from DB
  const course = await getCourse(+courseId);

  // html
  const courseDetails = createCourseDetails(course);
  aboutcourse.appendChild(courseDetails);
  //lägga till inloggat user till course   

      // addUsertoCourse(+courseId);
  await UsersOrderedCourse(+courseId);
}


async function OrderAction(e: SubmitEvent): Promise<void> {   
 
  e.preventDefault();  
  const courseId = location.search.split('=')[1];
  const userfinns = getFromLocalStorage();
  console.log('userfinns', userfinns);
  if (userfinns) {
      addUsertoCourse(+courseId);
    //redirect  
    window.location.assign('../gallery.html');
  } else {
    //redirect  /pages/gallery.html
    location.href = '../pages/user/sign.html'
  }
}
const addUsertoCourse = async (id: number) => {
  try {
    //user 
    const st: User = await foundUserbyEmail(); 
    //fetch course      
    const course = await getCourse(id);
    // Update course with user     
     await patchCourseUser(st, course);     

  } catch (error) {
    console.error('Error adding user to course:', error);
    throw error;
  }
}

const foundUserbyEmail = async () => {
  const users = await getAllUsers();
  const userfinns = getFromLocalStorage();    
  if (userfinns) {
    const foundUser = users.find(
      (u: { email: { trim: () => User; }; }) => u.email.trim() === userfinns[0]);
    return foundUser;
  } else {
    location.href = './admin/sign.html';
  }
}
// Display Users som ordered course
const UsersOrderedCourse = async (id: number) => {
  const course = await getCourse(id);   
  const students  = course.students;
   console.log('students', students);
   

  if (students === null) {
    console.log('no user');
  } else {
    students.forEach(user  => {
      console.log('userb', user);
      createStudentsDetails(user, studentsHTML);
    })
   }
}


// const courseId = new URLSearchParams(window.location.search).get("id");
document.addEventListener('DOMContentLoaded', initPage);
document
        .querySelector<HTMLButtonElement>('#order-btn')!
        .addEventListener('submit', OrderAction); 
 

