 
// import { ResponseModel } from '../models/ResponseModel.js';
import { UserType } from '../models/UserType.js';
import { listAllUsers } from '../services/users.js';
  import { createUsersList  } from '../forms/html-users.js';

  
const usersList = document.querySelector('#users-list') as HTMLDivElement ;

async function initPage() {    
    listUsers();         
}

async function listUsers( ) {
const res = await listAllUsers();
 displayUsers( res as unknown as [UserType ]  );  
}    

function displayUsers(users:[UserType ] )  {   
  usersList.innerHTML="";
 for (let user of users) {
  usersList.appendChild(createUsersList(user));  
 }
  }    
document.addEventListener('DOMContentLoaded', initPage);
