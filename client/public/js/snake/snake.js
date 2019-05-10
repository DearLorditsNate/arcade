// document.addEventListener("DOMContentLoaded", function () {
    //globals

    //game board
    const row = 20;
    const column = 40;
    const SQ = 20;

    //game logic
    let currentIndexedTargetSpot;
    let snakeArray = [];
    let randomRow;
    let randomColumn;
    let currentDirection;
    let gameOver = false;
    let score = 0;
    let currentMovement;

    //DOM elements
    const canvas = document.getElementById('snakeCanvas');
    const DOMscore = document.getElementById('snakeScore');
    const DOMLoseMessage = document.getElementById('snakeLoseMessage');

    //canvas render
    const ctx = canvas.getContext("2d");

    //changeable items
    const snakeColor = 'blue';
    const targetColor = 'red';
    const vacant = 'white';
    let timer = 100;


    //draw functions
    function drawSquare(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, SQ, SQ);
        ctx.strokeStyle = "lightgrey";
        ctx.strokeRect(x, y, SQ, SQ);
    };

    function drawSnake() {
        for (var i = 0; i < snakeArray.length; i++) {
            drawSquare(snakeArray[i].x * SQ, snakeArray[i].y * SQ, snakeColor);
            board[snakeArray[i].y][snakeArray[i].x] = 'occupied';
        };
    };


    //create the board
    let board = [];
    for (var r = 0; r < row; r++) {
        board[r] = [];
        for (var c = 0; c < column; c++) {
            board[r][c] = vacant;
        };
    };

    //draw the board to the canvas
    function drawBoard() {
        for (var r = 0; r < row; r++) {
            for (var c = 0; c < column; c++) {
                drawSquare(c * SQ, r * SQ, board[r][c]);
            };
        };
    };


    class Snake {

        constructor() {
            //starting spot
            this.x = column / 2;
            this.y = row / 2;
            snakeArray.push({ x: this.x, y: this.y });
            this.moveSnakeArray();
            this.randomTarget();
        };

        randomTarget() {
            let assigned = false;

            while (assigned === false) {
                randomRow = Math.floor(Math.random() * row);
                randomColumn = Math.floor(Math.random() * column);

                //make sure new target is not assigned to a part of the canvas where the snake is
                if (board[randomRow][randomColumn] !== 'occupied') {
                    currentIndexedTargetSpot = { y: randomRow, x: randomColumn };
                    drawSquare(currentIndexedTargetSpot.x * SQ, currentIndexedTargetSpot.y * SQ, targetColor);
                    assigned = true;
                };
            };
        };

        move(direction) {
            clearInterval(currentMovement);

            //quickly snap to new spot, then continue to move in that direction with setInterval
            if (direction === 'up') { this.y-- } else if (direction === 'down') { this.y++ } else if (direction === 'right') { this.x++ } else if (direction === 'left') { this.x-- };
            this.checkForSnakeCrash();
            this.checkForBoundaryInfraction();
            this.checkIfTargetReached();
            this.moveSnakeArray();
            if (!gameOver) {
                currentMovement = setInterval(() => {
                    //clear square
                    this.moveSnakeArray();

                    //set direction
                    if (direction === 'up') { this.y-- } else if (direction === 'down') { this.y++ } else if (direction === 'right') { this.x++ } else if (direction === 'left') { this.x-- };
                    this.checkForBoundaryInfraction();
                    this.checkForSnakeCrash();
                    this.checkIfTargetReached();
                    this.moveSnakeArray();
                }, timer);
            };
        };

        checkIfTargetReached() {
            if (this.x === currentIndexedTargetSpot.x && this.y === currentIndexedTargetSpot.y) {
                score++;
                DOMscore.textContent = score;

                //lengthen snake
                this.randomTarget();
                this.lengthenSnake();
            };
        };

        checkForBoundaryInfraction() {
            if (this.x < 0 || this.y < 0 || this.x === column || this.y === row) {
                gameOver = true;
                clearInterval(currentMovement) ;
                DOMLoseMessage.style.display = 'block';

                //grab user-id
                var firebaseuid = document.getElementById('wrapper').getAttribute('data-id')
                console.log(firebaseuid)
                if(firebaseuid){
                    $.post('/api/score/score', {gameName:'snake', score: score, uid:firebaseuid }).then(response => {console.log(response)});
                }
            };
        };

        lengthenSnake() {
            for(var i=0;i<3;i++){
                snakeArray.push({ x: this.x, y: this.y });
            };
        };

        moveSnakeArray() {
            drawSquare(snakeArray[0].x * SQ, snakeArray[0].y * SQ, vacant);
            board[snakeArray[0].y][snakeArray[0].x] = vacant;
            snakeArray.shift();
            snakeArray.push({ x: this.x, y: this.y });
            drawSnake();
        };

        checkForSnakeCrash() {
            if (board[this.y][this.x] === 'occupied') {
                clearInterval(currentMovement)
                gameOver = true;
                var firebaseuid = document.getElementById('wrapper').getAttribute('data-id')
                if(firebaseuid){
                    $.post('/api/score/score', {gameName:'snake', score: score, uid:firebaseuid }).then(response => {console.log(response)});
                }
                DOMLoseMessage.style.display = 'block';
            };
        };
    };

    document.addEventListener('keydown', (event) => {
        if (!gameOver) {
            if (event.key === 'ArrowUp') {
                if (currentDirection !== 'down') {
                    snake.move('up');
                    currentDirection = 'up';
                };
            } else if (event.key === 'ArrowDown') {
                if (currentDirection !== 'up') {
                    snake.move('down');
                    currentDirection = 'down';
                };
            } else if (event.key === 'ArrowLeft') {
                if (currentDirection !== 'right') {
                    snake.move('left');
                    currentDirection = 'left';
                };
            } else if (event.key === "ArrowRight") {
                if (currentDirection !== 'left') {
                    snake.move('right');
                    currentDirection = 'right';
                };
            };
        };
    });


    drawBoard();
    let snake = new Snake();

// });
