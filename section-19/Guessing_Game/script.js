let maxNum = parseInt(prompt("Enter the maximum number!"));

while (!maxNum) {
    maxNum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}
if (guess === 'q') {
    console.log("OK, YOU QUIT!");
} else {
    console.log("CONGRATS! YOU WIN!");
    console.log(`You got it! It took you ${attempts} guesses`);
}
