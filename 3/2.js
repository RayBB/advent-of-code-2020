const fs = require('fs');
const map = fs.readFileSync('input.txt', 'utf8').split("\n")

function countCharactersInPath(down, right, map){
    let foundChars = {};
    let xIndex = 0;
    let yIndex = 0;
    const xMax = map[0].length - 1;
    const yMax = map.length - 1;

    while (yIndex <= yMax){
        const currentChar = map[yIndex][xIndex];
        //console.log(currentChar)
        if (foundChars[currentChar] === undefined){
            foundChars[currentChar] = 1;
        } else {
            foundChars[currentChar] += 1;
        }
        xIndex = getNextRight(xIndex, xMax, right);
        yIndex += down;
    }
    return foundChars;
}

function getNextRight(current, max, increment){
    const sum = current + increment;
    if (sum <= max) return sum;
    return sum-max-1;
}

// get next right tests
// console.log(getNextRight(3, 3, 1), "0")
// console.log(getNextRight(3, 4, 1), "4")
// console.log(getNextRight(3, 4, 2), "0")
// console.log(getNextRight(9, 10, 3), "1")


let outputs = [
    countCharactersInPath(1,1,map),
    countCharactersInPath(1,3,map),
    countCharactersInPath(1,5,map),
    countCharactersInPath(1,7,map),
    countCharactersInPath(2,1,map),
]
console.log(outputs.map(a=>a['#']).reduce((prev,cur)=>{return prev*cur},1))