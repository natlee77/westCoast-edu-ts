import { listAllUsers, searchUser } from '../services/users.js';
import { createUsersList } from '../forms/html-users.js';
const usersList = document.querySelector('#users-list');
document.querySelector('#searchForm')
    .addEventListener('submit', onSearch);
async function initPage() {
    listUsers();
}
async function listUsers() {
    let result;
    //Search
    let query = document.querySelector('#searchInput').value;
    if (query) {
        result = await searchUser(query);
    }
    else {
        result = await listAllUsers();
    }
    displayUsers(result);
}
function displayUsers(users) {
    usersList.innerHTML = "";
    for (let user of users) {
        usersList.appendChild(createUsersList(user));
    }
}
async function onSearch(e) {
    e.preventDefault();
    listUsers();
}
document.addEventListener('DOMContentLoaded', initPage);
