//Card for gallery display
export const createCard = (course) => {
    const div = document.createElement('div');
    div.classList.add('course-image');
    div.appendChild(createImage(course.imageUrl, course.id));
    div.appendChild(createCourseInfo(course));
    return div;
};
// //card for 1 course
// const createCourseCard = (course: Course) => {
//   const div = document.createElement('div');
//   div.classList.add('course-image');
//   // div.appendChild(createImage(course.imageUrl, course.id));
//   div.appendChild(createCourseInfo(course));
//   return div;
// };
// courses list desing in administration
export const createCourseDetails = (course) => {
    const details = document.createElement('div');
    details.innerHTML = `
  
      <div class="details-top">
        <section>
        <div>${course.imageUrl
        ? `<img src=" ../assets/images/${course.imageUrl} "
                 class="card-img-top" alt="${course.title}"/>`
        : `<img src="../assets/images/no-bild.jpg"
                class="card-img-top" alt="${course.title}"/>`}
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
export const createDiv = () => {
    return document.createElement('div');
    ;
};
export const createSpan = (text, cl) => {
    const span = document.createElement('span');
    span.innerText = text;
    span.classList.add(cl);
    return span;
};
const createImage = (imageUrl, id) => {
    const imageAnchor = document.createElement('a');
    const image = document.createElement('img');
    image.setAttribute('src', `./assets/images/${imageUrl}`);
    imageAnchor.href = `./pages/course-details.html?id=${id}`;
    image.setAttribute('id', id.toString());
    imageAnchor.appendChild(image);
    return imageAnchor;
};
const createCourseInfo = (course) => {
    const paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode(`${course.title} - ${course.type} - start ${course.start}`));
    return paragraph;
};
