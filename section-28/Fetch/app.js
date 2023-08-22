// // fetch sends a request to the URL then returns a Promise
// fetch("https://swapi.dev/api/people/1/")
//     // if Promise is resolved we make it to .then callback
//     .then(res => {
//         console.log("RESOLVED", res);
//         // res.json() will return another Promise
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log("ERROR!", e);
//     });

// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESOLVED", res);
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then(res => {
//         console.log("SECOND REQUEST RESOLVED!");
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR!", e);
//     });

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("ERROR!!!", e);
    }

}

loadStarWarsPeople();