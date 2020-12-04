const fs = require('fs');
const rawPassports = fs.readFileSync('input.txt', 'utf8')
    .split("\n\n")
    .map(a => a.replace(/\n/g, " "))

const parsedPassports = rawPassports
    .map(a => a.split(" "))
    .map(a => a.map(b => b.split(":")))
    .map(a => {
        let dict = {}
        a.forEach(arr => {
            const key = arr[0], value = arr[1];
            dict[key] = value;
        })
        return dict
    })

function isValidPassport(passport) {
    const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    const optionalFields = ['cid'];
    return requiredFields.every(key => passport.hasOwnProperty(key));
}
parsedPassports.forEach(p => { console.log(isValidPassport(p), p) })
console.log(parsedPassports.filter(isValidPassport).length)
