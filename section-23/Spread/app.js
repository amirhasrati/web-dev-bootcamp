<<<<<<< HEAD
const nums = [13, 4, 5, 21,3,3,8,9,10,92,4];

const max = Math.max(...nums);

console.log(nums);
console.log(...nums);
=======
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];

// Spread with Object Literals
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine };

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
>>>>>>> 0f9a28ade583fc0e4e863916837adb74c97994d9
