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



function switchlamp(ID){
    if(ID == 1){
        board.digitalWrite(6, 1);
    }else{
        board.digitalWrite(6, 0);
    }
}

let blind_state=false

function switchBlind(ID){
    blind_state ? board.digitalWrite(7, 1): board.digitalWrite(7, 0);
}

module.exports = {init, switchlamp,switchBlind};