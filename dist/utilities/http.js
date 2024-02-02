import { state } from './config.js';
export async function fetchData(endpoint, criteria) {
    // private
    const BASE_URL = state.api.baseUrl;
    let url = "";
    //http://localhost:3000/
    //courses?title_like=
    //JavaScript
    if (criteria) {
        url = `${BASE_URL}${endpoint}${criteria} `;
    }
    else {
        url = `${BASE_URL}${endpoint} `;
    }
    const response = await fetch(url);
    try {
        if (response.ok) {
            const result = await response.json();
            return result;
        }
        else {
            throw new Error(`${response.status} ${response.statusText}`);
        }
    }
    catch (error) {
        throw new Error(`Error in  get(): ${error}`);
    }
}
export async function addUserPOST(user) {
    try {
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
    }
    catch (error) {
        throw new Error(`Error in add metod : ${error}`);
    }
}
;
export async function addCoursePOST(course) {
    try {
        await fetch("http://localhost:3000/courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(course),
        });
    }
    catch (error) {
        throw new Error(`Error in add metod : ${error}`);
    }
}
;
export async function updateCourse(course) {
    try {
        const response = await fetch(`http://localhost:3000/courses/${course.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        });
        if (response.ok) {
            const result = await response.json();
            console.log(response);
            return result;
        }
        else {
            throw new Error(`${response.status} ${response.statusText}`);
        }
    }
    catch (error) {
        throw new Error(`Error in update metod: ${error}`);
    }
}
export async function deleteCourse(course) {
    try {
        const response = await fetch(`http://localhost:3000/courses/${course.id}`, {
            method: 'DELETE',
        });
    }
    catch (error) {
        throw new Error(`Error in delete metod: ${error}`);
    }
}
export const patchCourseUser = async (user, course) => {
    const res = await fetch(`http://localhost:3000/courses/${course.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            users: user
        }), // users: Array(user)
    });
    if (!res.ok) {
        console.error("Enrolling user to course failed", 400);
    }
};
