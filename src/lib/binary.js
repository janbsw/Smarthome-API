let bits = []

function binaryarray(number){
    let binarystring = Number(number).toString(2) 
    bits = binarystring.split("")
    let nullfillers = 8 - bits.length
    for(let i=0; i<=nullfillers; i++){
        bits.unshift(0)
    }
    return bits
}

module.exports = {binaryarray}