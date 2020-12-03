const fs = require('fs');



//const numbers = [1,2,4,1,2,3,5,1,2,9,1]

const numbers = fs.readFileSync('input.txt', 'utf8').split("\n").map(n=>parseInt(n));
const sorted = numbers.sort();
console.log(sorted)

function findTwoEntriesThatSum(target, array){
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex){
        let leftValue = array[leftIndex];
        let rightValue = array[rightIndex];
        const sum = leftValue + rightValue;
        if (sum === target){
            return {
                solutionFound: true,
                leftValue: leftValue,
                rightValue: rightValue
            }
        }
        if (sum > target) rightIndex--;
        if (sum < target) leftIndex++;
    }
    return {solutionFound: false}
}

function findThreeEntriesThatSum(target, array){
    for(let i = 0; i < array.length; i++){
        const currentNumber = array[i];
        const currentArray = array.filter(a=> a !== currentNumber);
        const matchingEntries = findTwoEntriesThatSum(target-currentNumber,currentArray);
        if (matchingEntries.solutionFound === true){
            matchingEntries.thirdValue = currentNumber;
            return matchingEntries;
        }
    }
    return {solutionFound: false}
}

const entries = findThreeEntriesThatSum(2020, sorted);
console.log(entries);
console.log(entries.leftValue * entries.rightValue * entries.thirdValue)