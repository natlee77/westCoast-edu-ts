import { listAllUsers } from '../services/users.js';
import { createUsersList } from '../forms/html-users.js';
const usersList = document.querySelector('#users-list');
async function initPage() {
    listUsers();
}
async function listUsers() {
    const res = await listAllUsers();
    displayUsers(res);
}
function displayUsers(users) {
    usersList.innerHTML = "";
    for (let user of users) {
        usersList.appendChild(createUsersList(user));
    }
}
document.addEventListener('DOMContentLoaded', initPage);
