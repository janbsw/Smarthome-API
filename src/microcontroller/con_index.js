const { binaryarray } = require('../lib/binary')

const { Board } = require("johnny-five");
const board = new Board({
    port: "COM41",
    baudrate:"9600"
});

// The board's pins will not be accessible until
// the board has reported that it is ready
function init(){
    board.on("ready", () => {
        console.log("Ready!");
      });
}

let lamp_state=false;

function switchlamp(ID){
    lamp_state ? board.digitalWrite(6, 1): board.digitalWrite(6, 0);
}

let blind_state=false

function switchBlind(Percent){
    blind_state ? board.digitalWrite(6, 1): board.digitalWrite(6, 0);
}

module.exports = {init, switchlamp,switchBlind};