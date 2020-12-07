const fs = require('fs');
const rawSeats = fs.readFileSync('input.txt', 'utf8').split("\n")
const seatStringsSplit = rawSeats.map(a=>{return{rowStr:a.slice(0,7),colStr:a.slice(7)}})
const seatsAsBinary = seatStringsSplit.map(
    a=>{
        return {
            rowBinary: convertStringToBinary(a.rowStr, "B", "F"),
            colBinary: convertStringToBinary(a.colStr, "R", "L")
        }}
        )
const seatFinal = seatsAsBinary.map(a=>{
    const out =  {
        row: parseInt(a.rowBinary, 2),
        col: parseInt(a.colBinary, 2)
    }
    out.id = out.row * 8 + out.col
    return out;
})

function convertStringToBinary(string, replaceWithOne, replaceWithZero){
    const oneRegex = new RegExp(replaceWithOne,"g");
    const zeroRegex =  new RegExp(replaceWithZero,"g");
    return string.replace(oneRegex, 1).replace(zeroRegex, 0);
}

const highestSeatId = Math.max.apply(Math, seatFinal.map(a=>a.id))
console.log(highestSeatId)