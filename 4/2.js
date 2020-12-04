const fs = require('fs');
const rawPassports = fs.readFileSync('input.txt', 'utf8')
    .split("\n\n")
    .map(a => a.replace(/\n/g, " "))

const parsedPassports = rawPassports
    .map(a => a.split(" "))
    .map(a => a.map(b => b.split(":")))
    .map(a => a.reduce((accumulator, target) => ({ ...accumulator, [target[0]]: target[1] }), {}))

function isBetween(input, min, max) {
    const parsedInput = parseInt(input);
    return parsedInput >= min && parsedInput <= max;
}

function isValidHeight(input) {
    // such as 190cm or 60in
    const unit = input.replace(/\d/g, "");
    if (unit === 'cm') return isBetween(input.replace(unit, ""), 150, 193);
    if (unit === 'in') return isBetween(input.replace(unit, ""), 59, 76);
    return false;
}

const validators = {
    'byr': (a => isBetween(a, 1920, 2002)),
    'iyr': (a => isBetween(a, 2010, 2020)),
    'eyr': (a => isBetween(a, 2020, 2030)),
    'hgt': isValidHeight,
    'hcl': (a => a.length === 7 && a.replace(/#[a-f,0-9]{6}/g, "") === ""),
    'ecl': (a => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(a)),
    'pid': (a => a.replace(/[0-9]{9}/g, "") === ""),
}

function isValidPassport(passport) {
    return Object.keys(validators)
        .every(key => passport.hasOwnProperty(key) && validators[key](passport[key]))
}

console.log(parsedPassports.filter(isValidPassport).length)
