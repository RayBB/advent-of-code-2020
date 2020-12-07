const fs = require('fs');
const groups = fs.readFileSync('input.txt', 'utf8').split("\n\n")

const groupsNoLineBreaks = groups.map(a => a.replace(/\n/g, ""))
const questionsYesPerGroup = groupsNoLineBreaks.map(a => new Set(a.split("")).size)
const total = questionsYesPerGroup.reduce((a, b) => a + b, 0)
console.log(questionsYesPerGroup)
console.log(total)