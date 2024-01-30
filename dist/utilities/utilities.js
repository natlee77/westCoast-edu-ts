"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFromLocalStorage = exports.addToLocalStorage = exports.getAllUsers = exports.convertFormDataToJson = void 0;
const convertFormDataToJson = (formData) => {
    const data = Object.fromEntries(formData.entries());
    return data;
};
exports.convertFormDataToJson = convertFormDataToJson;
const getAllUsers = async () => {
    try {
        const url = 'http://localhost:3000/users';
        const response = await fetch(url);
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        else {
            console.log('error');
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.getAllUsers = getAllUsers;
//______________Local Storage
// add to Local Storage
const addToLocalStorage = (user) => {
    const users = (0, exports.getFromLocalStorage)();
    users.push(user);
    //setItem som tar 2 argument key:value
    localStorage.setItem('westcoast users', JSON.stringify(users));
};
exports.addToLocalStorage = addToLocalStorage;
// get from Local Storage
const getFromLocalStorage = () => {
    let users;
    if (localStorage.getItem('westcoast users') === null) {
        users = [];
    }
    else {
        users = JSON.parse(localStorage.getItem('westcoast users'));
    }
    return users;
};
exports.getFromLocalStorage = getFromLocalStorage;
