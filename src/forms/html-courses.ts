/************************************ 
  DOM Manipulering
  **********************************/

import { Course } from "../models/CourseType";
import { UserType } from "../models/UserType";

//Card for gallery display
export const createCard = (course:Course ) => {
  const div = document.createElement('div');
  div.classList.add('course-image');
  div.appendChild(createImage(course.imageUrl,  course.id));
  div.appendChild(createCourseInfo(course));

  return div;
};
//card for 1 course
const createCourseCard = (course:Course) => {
  const div = document.createElement('div');
  div.classList.add('course-image');
  // div.appendChild(createImage(course.imageUrl, course.id));
  div.appendChild(createCourseInfo(course));

  return div;
};
const createImage = (imageUrl:string, id: string   ) => {
  const image = document.createElement('img');
  image.setAttribute('src', `./assets/images/${imageUrl}`);
  image.setAttribute('id',  id );

  return image;
};

const createCourseInfo = (course:Course) => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(
    document.createTextNode(`${course.title} - ${course.type} - start ${course.start}`)
  );

  return paragraph;
};
// courses list desing in administration
// const createCoursesList = (courses:[Course] ,element:any) => {
//   courses.forEach(course=>{     
//     const container= createDiv();
//     container.setAttribute('kursId',course.id);
//     container.appendChild(createSpan(course.title));
//     container.appendChild(createSpan(course.type));
//     container.appendChild(createSpan(`Start: ${course.start}`));
//     container.appendChild(createSpan(`Lenght: ${course.days} dags `));
//     element.appendChild(container); 
//     });  
// };
export const createUsersList = (users:[UserType],element:any)=>{ 
  users.forEach(user=>{    
    const container= createDiv();
    // container.setAttribute('userId',user.id);
    container.appendChild(createSpan(`Student :  ${user.firstName} ${user.lastName} *`));
    container.appendChild(createSpan( user.email));
    container.appendChild(createSpan( ` * tel:  ${user.telephone} `));
    // container.appendChild(createSpan(` Adress: ${user.street} ${user.city} ${user.postIndex} -- `)); 
    //  container.appendChild(createSpan(`-- bokad kurs: ${user.order[0].title   }   `));
    // console.log(user.order[0].title  );
    
    element.appendChild(container); 
    });  
  };  
const createDiv=( )=>{   
  return document.createElement('div');;
};
const createSpan = (text:string) => {
  const span = document.createElement('span');
  span.innerText = text;
  return span;
}
//event on image click
// const addImageClickHandler = (images:[string]) => {
//   images.forEach((image ) => {
//     const src = image.getAttribute('src');
//     const courseId = image.getAttribute('id');

//     image.addEventListener('click', () => {         
//       //  console.log(location);// click =>  href:"/pages/gallery.html"
//        //query string
//         location.href = `/pages/course-details.html?id=${courseId}`;
//     });
//   });
// };


export const createCourseDetails = (course:Course) => {
  const details = document.createElement('div');
  
  details.innerHTML = `
  
      <div class="details-top">
        <section>
        <div>${ course.imageUrl
             ? `<img src=" ../content/images/${course.imageUrl} "
                 class="card-img-top" alt="${course.title}"/>`
             : `<img src="../content/images/no-bild.jpg"
                class="card-img-top" alt="${course.title}"/>`
        }
        </div>
        </section>
      
        <section>
        <form id="order-form">
          <div class="form-control">
          <h1 type ="text" name="title" id="title">${course.title}</h2>
          </div>
          <div  >
          <p  ><i class="fas fa-star rating"></i>
          rating : ${course.rating}</p>
          </div>
          <div  >
          <p type ="text" name="description" id="description"> About course : ${course.description}</p>
          </div>
         <div class="form-control"> 
         <p type ="text" name="type" id="type"> Type of education : ${course.type}</p>
         </div>
         <div class="form-control">
          <p type ="text" name="price" id="price"> Price : ${course.price} kr</p>
          </div>
         
         <div class="form-control">
         <button id="order-btn" class="btn" type="submit"> Order course </button>
         </div>
          
         </form>
        <p> Student ordered this course: ${course.users[0].firstName } ${course.users[0].lastName }</p>
        
        
      </div>
    `;
    
  return details;
};
// Exportera createCard och addImageClickHandler
// namngiven export
 
