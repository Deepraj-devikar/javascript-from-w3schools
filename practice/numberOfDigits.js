
function findDigitCount(number) {
    let newNumber = number;
    let digitCount = 0;
    while(newNumber > 0){
        digitCount++;
        newNumber = parseInt(newNumber / 10);
    }
    return digitCount;
}

console.log(findDigitCount(12));

console.log(findDigitCount(1000));

console.log(findDigitCount(12575));