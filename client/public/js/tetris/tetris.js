
    const cvs = document.getElementById('tetris');
    const ctx = cvs.getContext("2d");

    const row = 20;
    const col = 10;
    const SQ = 30;
    const vacant = 'white';
    let gameOver = false;
    let score = 0;
    let speed = 1000;
    let nextPiece;
    let random;
    const DOMscore = document.getElementById('score');

    //draw a square
    function drawSquare(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, SQ, SQ);
        ctx.strokeStyle = "black";
        ctx.strokeRect(x, y, SQ, SQ)
    }

    //clear old squares after move
    function clearSquares(thisx, thisy, tetrominoMatrix) {
        for (var i = 0; i < tetrominoMatrix[0].length; i++) {
            for (var j = 0; j < tetrominoMatrix[0].length; j++) {
                if (tetrominoMatrix[i][j]) {
                    drawSquare((thisx * SQ + j * SQ), (thisy * SQ + i * SQ), vacant);
                };
            };
        };
    };

    //create the board
    let board = [];
    for (var i = 0; i < row; i++) {
        board[i] = [];
        for (var j = 0; j < col; j++) {
            board[i][j] = vacant;
        };
    };

    //draw the board to the canvas
    function drawBoard() {
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < col; j++) {
                drawSquare(j * SQ, i * SQ, board[i][j]);
            };
        };
    };

    //create the pieces
    class Piece {
        constructor(tetromino, color) {
            this.tetromino = tetromino;
            this.color = color;
            this.tetrominoN = 0;
            this.activeTetromino = this.tetromino[this.tetrominoN];
            this.x = (col / 2) - 2;
            this.y = 0;
        }
        //method to draw pieces within Piece constructor function
        draw() {
            for (var i = 0; i < this.activeTetromino.length; i++) {
                for (var j = 0; j < this.activeTetromino.length; j++) {
                    if (this.activeTetromino[i][j]) {
                        drawSquare((this.x * SQ) + (j * SQ), (this.y * SQ) + (i * SQ), this.color);
                    };
                };
            };
        };

        moveDown(timer) {
            if (!gameOver) {
                const interval = setInterval(() => {
                    if (!this.collision(0, 1, this.activeTetromino)) {
                        clearSquares(this.x, this.y, this.activeTetromino);
                        this.y++;
                        this.draw();
                    } else {
                        this.lock();
                        clearInterval(interval);
                        p = nextPiece;
                        nextPiece = randomPiece();
                        drawNextPieceBoard();
                        drawNextPiece(nextPiece)
                        p.draw();
                        p.moveDown(speed);
                    };
                }, timer);
            };
        };

        moveRight() {
            if (!this.collision(1, 0, this.activeTetromino)) {
                clearSquares(this.x, this.y, this.activeTetromino);
                this.x++;
                this.draw();
            };
        };

        moveLeft() {
            if (!this.collision(-1, 0, this.activeTetromino)) {
                clearSquares(this.x, this.y, this.activeTetromino);
                this.x--;
                this.draw();
            };
        };

        shootdown() {
            if (!gameOver) {
                const interval = setInterval(() => {
                    if (!this.collision(0, 1, this.activeTetromino)) {
                        clearSquares(this.x, this.y, this.activeTetromino);
                        this.y++;
                        this.draw();
                    } else {
                        clearInterval(interval);
                    };
                }, 0);
            };
        };

        rotate() {
            let nextPattern
            if (this.tetrominoN < 3) {
                nextPattern = this.tetromino[this.tetrominoN + 1];
            } else {
                nextPattern = this.tetromino[0];
            };

            if (!this.collision(0, 0, nextPattern)) {
                //rotate all but the square
                if (this.tetromino.length > 1) {
                    clearSquares(this.x, this.y, this.activeTetromino);
                    this.tetrominoN++;
                    if (this.tetrominoN === 4) {
                        this.tetrominoN = 0;
                    };
                    this.activeTetromino = this.tetromino[this.tetrominoN];
                    this.draw();
                };
            };
        };

        collision(x, y, piece) {
            for (var i = 0; i < piece.length; i++) {
                for (var j = 0; j < piece.length; j++) {
                    if (!piece[i][j]) {
                        continue;
                    } else if (piece[i][j]) {
                        let newX = this.x + j + x;
                        let newY = this.y + i + y;

                        //check for collision
                        if (newX < 0 || newX >= col || newY >= row) {
                            return true;
                        };

                        //check for locked piece
                        if (board[newY][newX] !== vacant) {
                            return true;
                        };
                    };
                };
            };
            return false;
        };

        lock() {
            for (var i = 0; i < this.activeTetromino.length; i++) {
                for (var j = 0; j < this.activeTetromino.length; j++) {
                    //skip vacant squares
                    if (!this.activeTetromino[i][j]) {
                        continue;
                    }
                    //check for piece locked at the top
                    if (this.y - 1 < 0) {
                        document.getElementById('lose-message').style.display = 'block';
                        gameOver = true;
                        break;
                    };
                    //lock the piece
                    board[i + this.y][j + this.x] = this.color;
                };
            };
            //check for and remove full row
            for (var i = 0; i < row; i++) {
                let isRowFull = true;
                for (var j = 0; j < col; j++) {
                    isRowFull = isRowFull && (board[i][j] !== vacant);
                };
                //is row is full, remove that row and drop down rows above
                if (isRowFull) {
                    for (var r = i; r > 0; r--) {
                        for (var c = 0; c < col; c++) {
                            board[r][c] = board[r - 1][c];
                        };
                    };
                    //recreate the top row of the board
                    for (var c = 0; c < col; c++) {
                        board[0][c] = vacant;
                    };
                    //increment the score
                    score += 10;
                    DOMscore.textContent = score;
                    speed = 1000 - (score);
                    console.log(speed);
                }
            }
            //update the board
            drawBoard();
        }

    }

    //array of pieces
    const pieces = [
        [Z, 'red'],
        [S, 'limegreen'],
        [T, 'gold'],
        [O, 'dodgerblue'],
        [L, 'purple'],
        [I, '#48D1CC'],
        [J, 'orange'],
    ];

    //generate an initial random piece
    function randomPiece() {
        random = Math.floor(Math.random() * pieces.length);
        return new Piece(pieces[random][0], pieces[random][1]);
    };

    //event listeners
    document.addEventListener('keydown', event => {
        if (event.key === "ArrowRight") {
            p.moveRight();
        } else if (event.key === "ArrowLeft") {
            p.moveLeft();
        } else if (event.key === "ArrowUp") {
            p.rotate();
        } else if (event.code === 'Space') {
            p.shootdown();
        } else if (event.key === 'ArrowDown') {
            if (!p.collision(0, 1, p.activeTetromino)) {
                clearSquares(p.x, p.y, p.activeTetromino);
                p.y++;
                p.draw();
            };
        };
    });

    //next piece logic
    nextPiece = randomPiece();
    const nextPieceCanvas = document.getElementById('nextPiece')
    const ctxNext = nextPieceCanvas.getContext("2d");

    let nextPieceBoard = [];
    for (var i = 0; i < 6; i++) {
        nextPieceBoard[i] = [];
        for (var j = 0; j < 6; j++) {
            nextPieceBoard[i][j] = vacant;
        };
    };

    function drawNextPieceSquare(x, y, color) {
        ctxNext.fillStyle = color;
        ctxNext.fillRect(x, y, SQ, SQ);
        ctxNext.strokeStyle = "black";
        ctxNext.strokeRect(x, y, SQ, SQ)
    }

    //draw the next piece board to the canvas
    function drawNextPieceBoard() {
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 6; j++) {
                drawNextPieceSquare(j * SQ, i * SQ, nextPieceBoard[i][j]);
            };
        };
    };

    function drawNextPiece(piece) {
        console.log(piece)
        for (var i = 0; i < piece.activeTetromino.length; i++) {
            for (var j = 0; j < piece.activeTetromino.length; j++) {
                if (piece.activeTetromino[i][j]) {
                    drawNextPieceSquare(SQ + j * SQ, SQ + i * SQ, piece.color);
                };
            };
        };
    }


    drawBoard();
    drawNextPieceBoard();
    drawNextPiece(nextPiece)
    let p = randomPiece();
    p.draw();
    p.moveDown(speed);

