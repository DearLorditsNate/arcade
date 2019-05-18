const canvas = document.getElementById('brickbreakercanvas');
const ctx = canvas.getContext('2d');

const rows = 10;
const columns = 20;
const vacant = 'white';
const SQ = 40;
const platformwidth = 2;
const platformheight = 0.5;
const ballcolor = 'red';
let ballInterval = null
let ballspeed = 6;
const ballRadius = SQ / 4
const brickcolor = 'orange'
let gameOver = false;
let score = 0
let level = 1
let gameStarted = false

const DOMscore = document.getElementById('brickbreakerscore')
const DOMlevel = document.getElementById('brickbreakerlevel')


const board = [];
let bricks = [[], [], [], []];


//fill board matrix
for (var i = 0; i < rows; i++) {
    board[i] = [];
    for (var j = 0; j < columns; j++) {
        board[i][j] = vacant
    }
}

//draw squares on the board
drawBoardSquare = (color, x, y, width, height) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, SQ, SQ);
    // ctx.strokeStyle = 'lightgrey';
    // ctx.strokeRect(x, y, width, height)
}

//draw the board
for (var r = 0; r < rows; r++) {
    for (var c = 0; c < columns; c++) {
        drawBoardSquare(vacant, c * SQ, r * SQ, SQ, SQ)
    }
}

//fill brick matrix
fillBrickMatrix = () => {
    for (var evenrow = 0; evenrow < 3; evenrow = evenrow + 2) {
        for (var i = 0; i < 6; i++) {
            bricks[evenrow][i] = [i * 3 + 1, evenrow]
        }
    }
    for (var oddrow = 1; oddrow < 4; oddrow = oddrow + 2) {
        for (var i = 0; i < 6; i++) {
            bricks[oddrow][i] = [i * 3 + 2, oddrow]
        }
    }
}
fillBrickMatrix()

//build the bricks
buildBricks = (color) => {
    for (var r = 0; r < bricks.length; r++) {
        for (var c = 0; c < bricks[r].length; c++) {
            ctx.fillStyle = color
            ctx.fillRect(bricks[r][c][0] * SQ, bricks[r][c][1] * SQ, 2 * SQ, SQ / 2)
        }
    }
}


class Game {

    constructor() {
        this.platformx = columns / 2 - 1
        this.platformy = rows - 1

        this.ballx = 200;
        this.bally = 200;

        this.ballYDirection = 'down';
        this.ballXDirection = 'right';

        this.drawPlatform()
        this.drawBall(this.ballx, this.bally, ballRadius, ballcolor)
        buildBricks(brickcolor)
    }

    drawPlatform() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.platformx * SQ, this.platformy * SQ, platformwidth * SQ, platformheight * SQ)
    }

    moveRight() {
        //check for boundary infraction
        if (this.platformx < columns - platformwidth) {
            drawBoardSquare(vacant, this.platformx * SQ, this.platformy * SQ, SQ, SQ)
            drawBoardSquare(vacant, (this.platformx + 1) * SQ, this.platformy * SQ, SQ, SQ)
            this.platformx++
            this.drawPlatform()
        }
    }

    moveLeft() {
        if (this.platformx > 0) {
            drawBoardSquare(vacant, this.platformx * SQ, this.platformy * SQ, SQ, SQ)
            drawBoardSquare(vacant, (this.platformx + 1) * SQ, this.platformy * SQ, SQ, SQ)
            this.platformx--
            this.drawPlatform()
        }
    }

    drawBall(x, y, radius, color) {
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = color;
        ctx.fill()
    }


    checkForBoundaryCrash() {
        //hits bottom
        if (this.bally === (rows * SQ) - SQ - ballRadius - 1 && this.ballx >= this.platformx * SQ - ballRadius - 1 && this.ballx <= this.platformx * SQ + 2 * SQ + ballRadius) {
            //was moving right
            if (this.ballXDirection === 'right') {
                this.ballRightUp()
            }
            //was moving left
            else {
                this.ballLeftUp()
            }
            this.ballYDirection = 'up'
        }

        //hits top
        if (this.bally === 0 + ballRadius) {
            //was moving right
            if (this.ballXDirection === 'right') {
                this.ballRightDown()
            }
            //was moving left
            else {
                this.ballLeftDown()
            }
            this.ballYDirection = 'down'
        }

        //hits left
        if (this.ballx === 0 + ballRadius) {
            //was moving down
            if (this.ballYDirection === 'down') {
                this.ballRightDown()
            }
            // was moving up
            else {
                this.ballRightUp()
            }
            this.ballXDirection = 'right'
        }

        //hits right
        if (this.ballx === columns * SQ - ballRadius) {
            //was moving up
            if (this.ballYDirection === 'up') {
                this.ballLeftUp()
            }
            //was moving down
            else {
                this.ballLeftDown()
            }
            this.ballXDirection = 'left'
        }

        //lose game
        if (this.bally > (rows * SQ) - ballRadius) {
            clearInterval(ballInterval);
            gameOver = true;
            var firebaseuid = document
              .getElementById("brickbreakercanvas")
              .getAttribute("data-id");
            if (firebaseuid) {
                $("#brick-save-modal").modal("show");
                $("#brick-save-modal-title").text(`Your score: ${score}`);

                $("#brick-save-btn").on("click", function() {
                var letter1 = $("#letter-1")
                    .val()
                    .toUpperCase();
                var letter2 = $("#letter-2")
                    .val()
                    .toUpperCase();
                var letter3 = $("#letter-3")
                    .val()
                    .toUpperCase();

                var initials = letter1 + letter2 + letter3;

                $.post("/api/score/score", {
                    gameName: "brickbreaker",
                    score: score,
                    uid: document.getElementById("brickbreakercanvas").getAttribute("data-id"),
                    initials: initials
                }).then(response => {
                    console.log(response);
                });

                $("#brick-save-modal").modal("hide");
                });
            }
        }

        //prevent ball from erasing platform
        if (this.bally > (rows * SQ) - SQ - ballRadius) {
            setInterval(this.drawPlatform(), 1)
        }

    }

    checkForBrickCrash() {
        if (!gameOver) {
            for (var i = 0; i < bricks.length; i++) {
                for (var j = 0; j < bricks[i].length; j++) {
                    //check if ball matches brick location
                    if (
                        //min brick x ball going down
                        this.ballx === (bricks[i][j][0] * SQ) - ballRadius &&
                        this.bally >= bricks[i][j][1] * SQ - ballRadius &&
                        this.bally <= bricks[i][j][1] * SQ + (SQ / 2) + ballRadius &&
                        this.ballYDirection === 'down'
                    ) {
                        buildBricks(vacant);
                        bricks[i].splice(j, 1)
                        buildBricks(brickcolor);
                        this.ballLeftDown();
                        this.ballXDirection = 'left'
                        score++
                        DOMscore.innerHTML = score
                    } else if (
                        //min brick x ball going up
                        this.ballx === (bricks[i][j][0] * SQ) - ballRadius &&
                        this.bally >= bricks[i][j][1] * SQ - ballRadius &&
                        this.bally <= bricks[i][j][1] * SQ + (SQ / 2) + ballRadius &&
                        this.ballYDirection === 'up'
                    ) {
                        buildBricks(vacant);
                        bricks[i].splice(j, 1)
                        buildBricks(brickcolor);
                        this.ballLeftUp();
                        this.ballXDirection = 'left'
                        score++
                        DOMscore.innerHTML = score
                    } else if (
                        //max brick x and ball going down
                        this.ballx === (bricks[i][j][0] * SQ) + (2 * SQ) + ballRadius &&
                        this.bally >= bricks[i][j][1] * SQ - ballRadius &&
                        this.bally <= bricks[i][j][1] * SQ + (SQ / 2) + ballRadius &&
                        this.ballYDirection === 'down'
                    ) {
                        buildBricks(vacant);
                        bricks[i].splice(j, 1)
                        buildBricks(brickcolor);
                        this.ballRightDown();
                        this.ballXDirection = 'right'
                        score++
                        DOMscore.innerHTML = score
                    } else if (
                        //max brick x and ball going up
                        this.ballx === (bricks[i][j][0] * SQ) + (2 * SQ) + ballRadius &&
                        this.bally >= bricks[i][j][1] * SQ - ballRadius &&
                        this.bally <= bricks[i][j][1] * SQ + (SQ / 2) + ballRadius &&
                        this.ballYDirection === 'up'
                    ) {
                        buildBricks(vacant);
                        bricks[i].splice(j, 1)
                        buildBricks(brickcolor);
                        this.ballRightUp();
                        this.ballXDirection = 'right'
                        score++
                        DOMscore.innerHTML = score
                    } else if (
                        //min brick y going left
                        this.bally === (bricks[i][j][1] * SQ) - ballRadius &&
                        this.ballx >= bricks[i][j][0] * SQ - ballRadius &&
                        this.ballx <= bricks[i][j][0] * SQ + (2 * SQ) + ballRadius &&
                        this.ballXDirection === 'left'
                    ) {
                        buildBricks(vacant);
                        bricks[i].splice(j, 1)
                        buildBricks(brickcolor);
                        this.ballLeftUp();
                        this.ballYDirection = 'up'
                        score++
                        DOMscore.innerHTML = score
                    } else if (
                        //min brick y going right
                        this.bally === (bricks[i][j][1] * SQ) - ballRadius &&
                        this.ballx >= bricks[i][j][0] * SQ - ballRadius &&
                        this.ballx <= bricks[i][j][0] * SQ + (2 * SQ) + ballRadius &&
                        this.ballXDirection === 'right'
                    ) {
                        buildBricks(vacant);
                        bricks[i].splice(j, 1)
                        buildBricks(brickcolor);
                        this.ballRightUp();
                        this.ballYDirection = 'up'
                        score++
                        DOMscore.innerHTML = score
                    } else if (
                        //max brick y going right
                        this.bally === (bricks[i][j][1] * SQ) + (SQ / 2) + ballRadius &&
                        this.ballx >= bricks[i][j][0] * SQ - ballRadius &&
                        this.ballx <= bricks[i][j][0] * SQ + (2 * SQ) + ballRadius &&
                        this.ballXDirection === 'right'
                    ) {
                        buildBricks(vacant);
                        bricks[i].splice(j, 1)
                        buildBricks(brickcolor);
                        this.ballRightDown();
                        this.ballYDirection = 'down'
                        score++
                        DOMscore.innerHTML = score
                    } else if (
                        //max brick y going left
                        this.bally === (bricks[i][j][1] * SQ) + (SQ / 2) + ballRadius &&
                        this.ballx >= bricks[i][j][0] * SQ - ballRadius &&
                        this.ballx <= bricks[i][j][0] * SQ + (2 * SQ) + ballRadius &&
                        this.ballXDirection === 'left'
                    ) {
                        buildBricks(vacant);
                        bricks[i].splice(j, 1)
                        buildBricks(brickcolor);
                        this.ballLeftDown();
                        this.ballYDirection = 'down'
                        score++
                        DOMscore.innerHTML = score
                    }
                }
            }
        }
    }

    //ball movement logic
    ballRightUp() {
        clearInterval(ballInterval);
        ballInterval = setInterval(() => {
            this.drawBall(this.ballx, this.bally, ballRadius + 0.8, vacant)
            this.ballx++;
            this.bally--;
            this.drawBall(this.ballx, this.bally, ballRadius, ballcolor)
            this.checkForBoundaryCrash()
            this.checkForBrickCrash()
            this.checkLevelUp()
        }, ballspeed)
    }

    ballRightDown() {
        clearInterval(ballInterval);
        ballInterval = setInterval(() => {
            this.drawBall(this.ballx, this.bally, ballRadius + 0.8, vacant)
            this.ballx++;
            this.bally++;
            this.drawBall(this.ballx, this.bally, ballRadius, ballcolor)
            this.checkForBoundaryCrash()
            this.checkForBrickCrash()
            this.checkLevelUp()
        }, ballspeed)
    }

    ballLeftUp() {
        clearInterval(ballInterval);
        ballInterval = setInterval(() => {
            this.drawBall(this.ballx, this.bally, ballRadius + 0.8, vacant)
            this.ballx--;
            this.bally--;
            this.drawBall(this.ballx, this.bally, ballRadius, ballcolor)
            this.checkForBoundaryCrash()
            this.checkForBrickCrash()
            this.checkLevelUp()
        }, ballspeed)
    }

    ballLeftDown() {
        clearInterval(ballInterval);
        ballInterval = setInterval(() => {
            this.drawBall(this.ballx, this.bally, ballRadius + 0.8, vacant)
            this.ballx--;
            this.bally++;
            this.drawBall(this.ballx, this.bally, ballRadius, ballcolor)
            this.checkForBoundaryCrash()
            this.checkForBrickCrash()
            this.checkLevelUp()
        }, ballspeed)
    }

    //check for level up
    checkLevelUp() {
        let finished = false
        if (bricks[0].length === 0 && bricks[1].length === 0 && bricks[2].length === 0 && bricks[3].length === 0) {
            finished = true;
        }
        if (finished) {
            level++
            DOMlevel.innerHTML = level
            fillBrickMatrix()
            buildBricks()
            ballspeed -= 1
        }
    }
}

let game = new Game()

const leftArrow = document.getElementById('leftArrowButton')
console.log(leftArrow)
leftArrow.addEventListener('click', ()=>{
    if (!gameStarted) {
        // document.getElementById('directions').style.display = 'none'
        game.ballRightDown()
        gameStarted = true
    }
    game.moveLeft();
})

const rightArrow = document.getElementById('rightArrowButton')
console.log(rightArrow)
rightArrow.addEventListener('click', ()=>{
    if (!gameStarted) {
        // document.getElementById('directions').style.display = 'none'
        game.ballRightDown()
        gameStarted = true
    }
    game.moveRight();
})

document.addEventListener('keydown', function (event) {
    if (!gameOver) {
        if (event.key === 'ArrowRight') {
            if (!gameStarted) {
                // document.getElementById('directions').style.display = 'none'
                game.ballRightDown()
                gameStarted = true
            }
            game.moveRight();
        } else if (event.key === 'ArrowLeft') {
            if (!gameStarted) {
                // document.getElementById('directions').style.display = 'none'
                game.ballRightDown()
                gameStarted = true
            }
            game.moveLeft();
        }
    }
})




