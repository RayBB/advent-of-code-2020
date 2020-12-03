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
    const first = policy.password.charAt(policy.min - 1) === policy.letter;
    const second = policy.password.charAt(policy.max - 1) === policy.letter;
    return first ^ second == 1; // ^ is an exclusive or
}

console.log(parsedInputs)
console.log(parsedInputs.filter(validatePassword).length)