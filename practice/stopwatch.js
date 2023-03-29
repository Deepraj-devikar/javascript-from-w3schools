import readline from 'readline-sync';

function stopwatchTime(startTime, endTime) {
    let miliseconds = endTime - startTime;
    const hours = parseInt(miliseconds / 3600000);
    miliseconds %= 3600000;
    const minutes = parseInt(miliseconds / 60000);
    miliseconds %= 60000;
    const seconds = parseInt(miliseconds / 1000);
    miliseconds %= 1000;
    return `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

let startTime;
let endTime;
let isStrted = false;
const isStart = readline.question("You have to start stopwatch? enter y : ");

if (isStart == 'y') {
    startTime = new Date();
    isStrted = true;
}

if (isStrted) {
    const isEnd = readline.question('You have to stop stopwatch? enter y : ');
    endTime = new Date();
    console.log(stopwatchTime(startTime, endTime));
}