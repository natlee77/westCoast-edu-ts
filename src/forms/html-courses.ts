import { Course, CourseUser } from "../models/CourseType.js";


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

// courses list desing in administration
export  const createCoursesList = (course: Course   ) => {
   
    const container= createDiv();
    // container.setAttribute('kursId',course.id);
    container.appendChild(createSpan(course.title,'title'));
    
     container.appendChild(createSpan(course.type,'type'));
      container.appendChild(createSpan(`Start: ${course.start}`,'start'));
     container.appendChild(createSpan(`Lenght: ${course.days} days `, 'days'));
    return container;
    
};



export const createDiv=( )=>{   
  return document.createElement('div');;
};
export const createSpan = (text:string,   cl:string) => {
  const span = document.createElement('span');
  span.innerText = text;
  span.classList.add(cl ) ;
  return span;
}
const createImage = (imageUrl:string, id: number  ) => {
  const image = document.createElement('img');
  image.setAttribute('src', `./assets/images/${imageUrl}`);
  image.setAttribute('id',  id.toString() );

  return image;
};

const createCourseInfo = (course:Course) => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(
    document.createTextNode(`${course.title} - ${course.type} - start ${course.start}`)
  );

  return paragraph;
};

 


export const createCourseDetails = (course:CourseUser) => {
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
        
        
        
      </div>
    `;
    
  return details;
};
// <p> Student ordered this course: ${course.users[0].firstName } ${course.users[0].lastName }</p>
