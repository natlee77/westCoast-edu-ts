import { createDiv, createSpan } from "./html-courses.js";
//create Users list i Admin/users
export const createUsersList = (user) => {
    const container = createDiv();
    // container.setAttribute('userId',user.id);
    container.appendChild(createSpan(`Student :  ${user.firstName} ${user.lastName} *`));
    container.appendChild(createSpan(user.email));
    container.appendChild(createSpan(` * tel:  ${user.telephone} `));
    // container.appendChild(createSpan(` Adress: ${user.street} ${user.city} ${user.postIndex} -- `)); 
    //  container.appendChild(createSpan(`-- bokad kurs: ${user.order[0].title   }   `));
    // console.log(user.order[0].title  );   
    return container;
};
