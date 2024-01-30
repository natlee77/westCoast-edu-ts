import { state } from './config.js';
export async function fetchData(endpoint, criteria) {
    // private
    const BASE_URL = state.api.baseUrl;
    let url = "";
    if (criteria) {
        url = `${BASE_URL}${endpoint}?query=${criteria} `;
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
// //
//   async add(data) {
//     try {
//         const response = await fetch(this.#url, {
//           //post metod--skapa fetch paket
//           method: 'POST',
//           //vi tala att vi skicka till server Json formaterat
//          headers: {
//           'Content-Type': 'application/json',
//          },
//          //skicka   data som string
//          body: JSON.stringify(data),
//         });
//       if (response.ok) {
//           const result = await response.json();
//           console.log(response);
//         //  return result;
//       } else {
//         throw new Error(`${response.status} ${response.statusText}`);
//       }
//     } catch (error) {
//       throw new Error(`Error in add metod : ${error}`);
//     }
//   }
//   async update(data) {
//     try {       
//       const response = await fetch(this.#url, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       if (response.ok) {
//           const result = await response.json();
//           console.log(response);
//           return result;
//       } else {
//         throw new Error(`${response.status} ${response.statusText}`);
//       }
//     } catch (error) {
//       throw new Error(`Error in update metod: ${error}`);
//     }
//   }
//   async delete(data) {
//     try {
//       const response = await fetch(this.#url, {
//         method: 'DELETE',
//       });
//       // if (response.ok) {
//       //    const result = await response.json();
//       //   // console.log(response);
//       //     return result;
//       // } else {
//       //   throw new Error(`${response.status} ${response.statusText}`);
//       // }
//     } catch (error) {
//       throw new Error(`Error in delete metod: ${error}`);
//     }
//   }
