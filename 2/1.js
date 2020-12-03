const fs = require('fs');

const inputStr = fs.readFileSync('input.txt', 'utf8');
const parsedInputs = inputStr.split("\n").map(a=>a.replace(":", "")).map(a=>a.split(" ")).map(a=>{
    return {
        min: parseInt(a[0].split("-")[0]),
        max: parseInt(a[0].split("-")[1]),
        letter: a[1],
        password: a[2]
    }
})

function validatePassword(policy){
    const matches = policy.password.match(new RegExp(policy.letter,"g"))
    const matchesCount = matches == null ? 0 : matches.length;
    return matchesCount >= policy.min && matchesCount <= policy.max;
}

console.log(parsedInputs)
console.log(parsedInputs.filter(validatePassword).length)