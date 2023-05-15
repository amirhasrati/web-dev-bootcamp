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