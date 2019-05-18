//game board 
const row = 15;
const column = 15;


const ships = {
    "carrier" : {
        "length": 5
    },
    "battleship" : {
        "length" :4
    },
    "tanker" : {
        "length": 3
    },
    "tugboat": {
        "length" :2
    },
    "sub" : {
        "length" : 5
    }
}

const canvas = document.getElementById('battleGameCanvas');
const ctx = canvas.getContext('2d');

//when player makes a hit
const targetHit = 'red';
const targetOpen = 'blue';
let timer = 5000;
 
//drawboard
function drawBoard(x,y,ships) {
    ctx.fill
}

