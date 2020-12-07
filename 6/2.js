const fs = require('fs');
const groups = fs.readFileSync('input.txt', 'utf8').split("\n\n")

const groupsSplitIntoPeople = groups.map(a => a.split("\n"))
const questionPerGroup = groupsSplitIntoPeople.map(calculateNumQuestionsAnsweredYesByEveryone)
const answer = questionPerGroup.reduce((a, b) => { return a + b }, 0)
console.log("answer:", answer)

function calculateNumQuestionsAnsweredYesByEveryone(group) {
    const firstPerson = group[0].split("");
    let yesByAllCount = firstPerson
        .map(question => { return everyoneInGroupSaidYes(group, question) })
        .reduce((a, b) => { return a + b }, 0)
    return yesByAllCount;
}

function everyoneInGroupSaidYes(group, question) {
    // returns 1 if everyone in group answered yes, otherwise returns 0;
    return group.every(person => person.includes(question)) ? 1 : 0;
}