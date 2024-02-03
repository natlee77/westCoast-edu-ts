
import { createUserHTMLCard } from "../forms/html-forms.js";
import { addUserPOST } from "../utilities/http.js";
import { convertFormDataToJson } from "../utilities/utilities.js";


const form = document.querySelector('#newUserForm') as HTMLFormElement;
const cardForUser = document.querySelector('#user-form') as HTMLElement;

function initPage() {
  cardForUser.appendChild(createUserHTMLCard());

  console.log('start  ', addUser);

}

const addUser = async (e: any) => {
  e.preventDefault();
 
  const user = new FormData(form); 
  const obj = convertFormDataToJson(user);
  saveUser(obj);

}

async function saveUser(user: any) {
  addUserPOST(user);
  location.href = '../sign.html'
}

document.addEventListener('DOMContentLoaded', initPage); 
form.addEventListener('submit', addUser);