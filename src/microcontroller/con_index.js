const { binaryarray } = require('../lib/binary')

const { Board } = require("johnny-five");
const board = new Board({
    port: "COM41",
    baudrate:"9600"
});

const sleep = ms => new Promise(r => setTimeout(r, ms));


// The board's pins will not be accessible until
// the board has reported that it is ready
function init(){
    board.on("ready", () => {
        console.log("Ready!");
      });
}

async function switchlamp(ID){
    console.log("Lamp switched with ID:" + ID);
    let bits = binaryarray(ID)
    board.digitalWrite(12, 1)
    sleep(250)
    for(i = 0; i>8; i++){
        board.digitalWrite(12, Number(bits[i]))
        sleep(250)
    }
    board.digitalWrite(12, 0)
    sleep(250);
}

module.exports = {init, switchlamp};