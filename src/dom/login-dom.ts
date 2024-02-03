import { User } from "../models/UserType.js";
import { addToLocalStorage,getAllUsers } from "../utilities/utilities.js";

const loginButton = document.getElementById('login_button') as HTMLButtonElement;
const form= document.getElementById('login_form') as HTMLFormElement;
//login_form
  async function  initPage   ()  {
   console.log('start initpage');
   logInHandler
}

const logInHandler = async (e:any) => {
    e.preventDefault();     

    try {
        const users: User[] = await getAllUsers();
        const emailInput = form.elements.namedItem('email') as HTMLInputElement;
        const passwordInput = form.elements.namedItem('password') as HTMLInputElement;

        const foundUser = users.find(
            (user) => user.email.trim() === emailInput.value.trim() &&
                      user.password.trim() === passwordInput.value.trim()
        );
        console.log("found user password", emailInput.value, passwordInput.value, foundUser);
        if (foundUser) {
            // Securely store user information (e.g., using a token)
            addToLocalStorage(emailInput.value);
            window.location.assign('/src/gallery.html');
        } else {
            // Handle invalid credentials (e.g., display an error message)
            window.alert('Invalid email or password');
        }
    } catch (error) {         
        window.alert(   error);
    }
 
};


document.addEventListener('DOMContentLoaded', initPage);
loginButton.addEventListener('click', logInHandler);