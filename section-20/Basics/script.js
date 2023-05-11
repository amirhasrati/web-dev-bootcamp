function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singSong();

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}!`);
}


function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numReps; i++) {
        result += message;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum;
}