import { User } from '../models/UserType.js';
import { listAllUsers, searchUser } from '../services/users.js';
import { createUsersList } from '../forms/html-users.js';
import { ResponseModel } from '../models/ResponseModel.js';
 


const usersList = document.querySelector('#users-list') as HTMLDivElement;

document.querySelector<HTMLFormElement>('#searchForm')!
  .addEventListener('submit', onSearch);

async function initPage() {
  listUsers();
}

async function listUsers() {
  let result: ResponseModel;
  //Search
  let query: string =
       document.querySelector<HTMLInputElement>('#searchInput')!.value;
  
  if (query) {
    result = await searchUser(query );
  } else {
    result = await listAllUsers( );
  }
  displayUsers(result as unknown as [User]);
}

function displayUsers(users: [User]) {
  usersList.innerHTML = "";
  for (let user of users) {
    usersList.appendChild(createUsersList(user));
  }
}

async function onSearch(e: SubmitEvent): Promise<void> {
  e.preventDefault();
  listUsers();
}
document.addEventListener('DOMContentLoaded', initPage);
