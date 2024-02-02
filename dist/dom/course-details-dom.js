import { createCourseDetails } from '../forms/html-courses.js';
import { getCourse } from '../services/course-detail.js';
import { getAllUsers, getFromLocalStorage } from '../utilities/utilities.js';
import { createStudentsDetails } from '../forms/html-users.js';
import { patchCourseUser } from '../utilities/http.js';
const aboutcourse = document.querySelector('#about-course');
const btnOrder = document.querySelector('#order-btn');
const students = document.getElementById('students');
const initPage = async () => {
    const courseId = location.search.split('=')[1];
    //from DB
    const course = await getCourse(+courseId);
    console.log('course', course);
    // html
    const courseDetails = createCourseDetails(course);
    aboutcourse.appendChild(courseDetails);
    //lägga till inloggat user till course
    //  OrderAction(+courseId);
    await UsersOrderedCourse(+courseId);
    //   //  await addUsertoCourse(courseId); 
    //    // Display Users som ordered course
    //    //kan inte anropa det in course Details  ?????
    //    const users = course.users;
    //    users.forEach(user => {
    //      const studentName = `${user.firstName} ${user.lastName}`;
    //      console.log('student:', studentName);
    //      return studentName;
    //    })
    //   //  orderButton.addEventListener('submit', OrderAction);
    //    console.log('btn', orderButton);
    //   const user =  await foundUserbyEmail();
    //   console.log('user', user);
    // //course      
    //   const url = `http://localhost:3000/courses/${courseId}`;
    //   const http = new HttpClient(url);
    //   // const course = await http.get();
    //   console.log('course', course.users);
    //   const courseAddUser = course.users.push(user); ///////////error
    //   console.log('courseadd', courseAddUser);
    //   const obj = JSON.stringify(courseAddUser);    
    //   await http.update(obj);
};
const OrderAction = (e) => {
    e.preventDefault();
    const courseId = location.search.split('=')[1];
    const userfinns = getFromLocalStorage();
    if (userfinns) {
        addUsertoCourse(+courseId);
        //redirect  
        location.href = '../gallery.html';
    }
    else {
        //redirect  /pages/gallery.html
        location.href = '../pages/user/sign.html';
    }
};
const addUsertoCourse = async (id) => {
    try {
        //userID
        const user = await foundUserbyEmail();
        console.log('foundLiocal', user);
        //fetch course      
        const course = await getCourse(id);
        // const url = `http://localhost:3000/courses/${id}`;
        // const http = new HttpClient(url);
        // const course = await http.get();
        // Update course with user
        // const updatedCourse = { ...course, users: [...course.users, user] };
        const res = await patchCourseUser(user, course);
        console.log('Updated course:', res);
        return res;
    }
    catch (error) {
        console.error('Error adding user to course:', error);
        throw error;
    }
};
const foundUserbyEmail = async () => {
    const users = await getAllUsers();
    const userfinns = getFromLocalStorage();
    if (userfinns) {
        const foundUser = users.find((u) => u.email.trim() === userfinns[0]);
        return foundUser;
    }
    else {
        location.href = './admin/sign.html';
    }
};
// Display Users som ordered course
const UsersOrderedCourse = async (id) => {
    const course = await getCourse(id);
    const usersBok = course.usersBok;
    usersBok.forEach(u => {
        createStudentsDetails(u, students);
    });
};
document.addEventListener('DOMContentLoaded', initPage);
btnOrder.addEventListener('submit', OrderAction);
