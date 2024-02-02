import { createDiv, createSpan } from "./html-courses.js";
//create Users list i Admin/users
export const createUsersList = (user) => {
    const container = createDiv();
    container.setAttribute('userId', user.id);
    container.appendChild(createSpan(`Student :  ${user.firstName} ${user.lastName}  `, 'name'));
    container.appendChild(createSpan(user.email, 'email'));
    container.appendChild(createSpan(` * tel:  ${user.telephone} `, 'telephone'));
    // container.appendChild(createSpan(` Adress: ${user.street} ${user.city} ${user.postIndex} -- `)); 
    //  container.appendChild(createSpan(`-- bokad kurs: ${user.order[0].title   }   `));
    // console.log(user.order[0].title  );   
    return container;
};
export const createStudentsDetails = (user, element) => {
    const container = createDiv();
    container.appendChild(createSpan(`Student :  ${user.firstName} ${user.lastName}`, 'student'));
    container.appendChild(createSpan(user.email, 'email'));
    container.appendChild(createSpan(` * tel:  ${user.telephone} `, 'telephone'));
    element.appendChild(container);
};
