import { User } from "../models/UserType";

export const convertFormDataToJson = (formData: any[] | FormData ) => {
  const data = Object.fromEntries(formData.entries());
  console.log('json',data);
  
  return data;
};
export async function getAllUsers ( )  { 
 
  try {
      const url = 'http://localhost:3000/users';

      const response = await fetch(url);

      if (response.ok) {
          const result = await response.json();
          return result;
      } else {
          console.log('error');
      }
  } catch (error) {
      console.log(error);
  }
};

//______________Local Storage

// add to Local Storage
export const addToLocalStorage = (user:any ) => {
  const users   = getFromLocalStorage();
  users.push(user);
  //setItem som tar 2 argument key:value
  localStorage.setItem('westcoast users', JSON.stringify(users));

};
// get from Local Storage

export const getFromLocalStorage = () => {
  let users;
  if (localStorage.getItem('westcoast users') === null) {
      users = [];
  } else {
    //  users = JSON.parse(localStorage.getItem('westcoast users'));
  }
  
  
   return users;
};

 