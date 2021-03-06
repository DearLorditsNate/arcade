//game board 
const canvas = document.getElementById('battleGameCanvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 4;
ctx.font = '32px serif';

// Draw grid
ctx.strokeStyle = '#09f';
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(450, 50);
ctx.moveTo(0, 100);
ctx.lineTo(450, 100);
ctx.moveTo(0, 150);
ctx.lineTo(450, 150);
ctx.moveTo(0, 200);
ctx.lineTo(450, 200);
ctx.moveTo(0, 250);
ctx.lineTo(450, 250);
ctx.moveTo(0, 300);
ctx.lineTo(450, 300);
ctx.moveTo(0, 350);
ctx.lineTo(450, 350);
ctx.moveTo(0, 400);
ctx.lineTo(450, 400);
//vertical lines
ctx.moveTo(50, 0);
ctx.lineTo(50, 450);
ctx.moveTo(100, 0);
ctx.lineTo(100, 450);
ctx.moveTo(150, 0);
ctx.lineTo(150, 450);
ctx.moveTo(200, 0);
ctx.lineTo(200, 450);
ctx.moveTo(250, 0);
ctx.lineTo(250, 450);
ctx.moveTo(300, 0);
ctx.lineTo(300, 450);
ctx.moveTo(350, 0);
ctx.lineTo(350, 450);
ctx.moveTo(400, 0);
ctx.lineTo(400, 450);
ctx.stroke();
//create grid labels
ctx.fillText('A', 60, 30);
ctx.fillText('B', 115, 30);
ctx.fillText('C', 160, 30);
ctx.fillText('D', 215, 30);
ctx.fillText('E', 270, 30);
ctx.fillText('F', 315, 30);
ctx.fillText('G', 360, 30);
ctx.fillText('H', 420, 30);
ctx.fillText('1', 15, 80);
ctx.fillText('2', 15, 130);
ctx.fillText('3', 15, 185);
ctx.fillText('4', 15, 235);
ctx.fillText('5', 15, 280);
ctx.fillText('6', 15, 330);
ctx.fillText('7', 15, 380);
ctx.fillText('8', 15, 435);
//create game functionality
$("#beginGame").on("click", function placeShips() {
    $("#battleGameStartModal").modal("show");
    //set line width
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.0

    //draw ships randomly
    //let tugboatXPossibilities = ["110", "160", "210", "260", "310", "360"];
    //var randTug1 = tugboatXPossibilities[Math.floor(Math.random() * tugboatXPossibilities.length)];
    //var randTug2 = tugboatXPossibilities[Math.floor(Math.random() * tugboatXPossibilities.length)];
    //let tanker1YPossibilities = ["60", "110", "160"];
    //var randTanker1 = tanker1YPossibilities[Math.floor(Math.random() * tanker1YPossibilities.length)];
    //let tanker2XPossibilities = ["60", "110", "160", "210"];
    //var randTanker2 = tanker2XPossibilities[Math.floor(Math.random() * tanker2XPossibilities.length)];
    //let carrierYPossibilities = ["60", "110", "160", "210", "280"];
    //var randCarrier = carrierYPossibilities[Math.floor(Math.random() * carrierYPossibilities.length)];
    ctx.fillRect(210, 210, 80, 20);//tugboat 2 -horiz
    ctx.fillRect(160, 110, 75, 20);//tugboat 1-horiz
    ctx.fillRect(55, 360, 130, 25);//tanker 2-horiz
    ctx.fillRect(360, 280, 25, 150);//carrier 1 -vert
    ctx.fillRect(60, 60, 25, 130);//tanker 1 - vert
});

//send Missiles
var count = 0;
var hit = 0;
var sunkenCount = 0;
var sinkTug1 = [];
var sinkTug2 = [];
var sinkTanker1 = [];
var sinkTanker2 = [];
var sinkCarrier = [];

$("#sendMissile").on("click", function sendMissle() {
    ctx.globalAlpha = 1.0;
    var clicks = ++count
    $("#fired").html(" ");
    $("#fired").append(clicks);
    console.log("missiles fired is : " + count);
    let xtargets = ["75", "125", "175", "225", "275", "325", "375", "425"];
    var randomXTargets = xtargets[Math.floor(Math.random() * xtargets.length)];
    let ytargets = ["75", "125", "175", "225", "275", "325", "375", "425"];
    var randomYTargets = ytargets[Math.floor(Math.random() * ytargets.length)];
    console.log("X" + randomXTargets);
    console.log("Y" + randomYTargets);
    if ((randomXTargets === "75" && randomYTargets === "75") || (randomXTargets === "75" && randomYTargets === "125")
        || (randomXTargets === "75" && randomYTargets === "175") || (randomXTargets === "175" && randomYTargets === "125") ||
        (randomXTargets === "225" && randomYTargets === "225") || (randomXTargets === "275" && randomYTargets === "225") ||
        (randomXTargets === "75" && randomYTargets === "375") || (randomXTargets === "125" && randomYTargets === "375") ||
        (randomXTargets === "175" && randomYTargets === "375") || (randomXTargets === "375" && randomYTargets === "275") ||
        (randomXTargets === "375" && randomYTargets === "325") || (randomXTargets === "375" && randomYTargets === "375") ||
        (randomXTargets === "375" && randomYTargets === "425") ||
        (randomXTargets === "225" && randomYTargets === "125")) {
        console.log("hit target");
        ctx.fillStyle = "red"
        ctx.fillRect(randomXTargets, randomYTargets, 20, 20);
        var hits = ++hit
        console.log(hits);
        $("#hit").html(" ");
        $("#hit").append(hits);
        sinkShip();
        // countTheSunken();


    } else {
        console.log("splash");
        ctx.beginPath();
        ctx.arc(randomXTargets, randomYTargets, 15, 0, 2 * Math.PI);
        ctx.stroke();
    }

    //recognize that ships are sunk


    function sinkShip() {

        if (randomXTargets === "75" && randomYTargets === "75") {
            if (!sinkTanker1.includes("tanker1Hit1")) {
                sinkTanker1.push("tanker1Hit1");
                if (sinkTanker1.length === 3) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                        // $("#battleGameWinModal").modal("show");

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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

                                $.post('/api/score/score', {
                                    gameName: 'battlegame',
                                    score: clicks,
                                    uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                    initials: initials
                                }).then(response => {
                                    console.log(response)
                                });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }
                    console.log(sinkTanker1);
                }
            }
        } else if (randomXTargets === "75" && randomYTargets === "125") {
            if (!sinkTanker1.includes("tanker1Hit2")) {
                sinkTanker1.push("tanker1Hit2");
                if (sinkTanker1.length === 3) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                        //alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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

                                $.post('/api/score/score', {
                                    gameName: 'battlegame',
                                    score: clicks,
                                    uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                    initials: initials
                                }).then(response => {
                                    console.log(response)
                                });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }
                    console.log(sinkTanker1);
                }
            }
        } else if (randomXTargets === "75" && randomYTargets === "175") {
            if (!sinkTanker1.includes("tanker1Hit3")) {
                sinkTanker1.push("tanker1Hit3");
                if (sinkTanker1.length === 3) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                      //  alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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

                                $.post('/api/score/score',
                                    {
                                        gameName: 'battlegame',
                                        score: clicks,
                                        uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                        initials: initials
                                    }).then(response => {
                                        console.log(response)
                                    });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }
                    console.log(sinkTanker1);
                }
            }
        } else if (randomXTargets === "175" && randomYTargets === "125") {
            if (!sinkTug1.includes("tug1Hit1")) {
                sinkTug1.push("tug1Hit1");
                if (sinkTug1.length === 2) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                        //alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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
                                console.log(initials)
                            $.post('/api/score/score', {
                                gameName: 'battlegame',
                                score: clicks,
                                uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                initials: initials
                            }).then(response => {
                                console.log(response)
                            });
                            $("#battlegame-save-modal").modal("hide");
                        });
                    }
                }
                console.log(sinkTug1);
            }
        }
        } else if (randomXTargets === "225" && randomYTargets === "125") {
            if (!sinkTug1.includes("tug1Hit2")) {
                sinkTug1.push("tug1Hit2");
                if (sinkTug1.length === 2) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                       // alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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

                                $.post('/api/score/score',
                                    {
                                        gameName: 'battlegame',
                                        score: clicks,
                                        uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                        initials: initials
                                    }).then(response => {
                                        console.log(response)
                                    });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }
                    console.log(sinkTug1);
                }
            }
        } else if (randomXTargets === "225" && randomYTargets === "225") {
            if (!sinkTug2.includes("tug2Hit1")) {
                sinkTug2.push("tug2Hit1");
                if (sinkTug2.length === 2) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                        //alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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
                                $.post('/api/score/score', {
                                    gameName: 'battlegame',
                                    score: clicks,
                                    uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                    initials: initials
                                }).then(response => {
                                    console.log(response)
                                });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }
                    console.log(sinkTug2);
                }
            }
        } else if (randomXTargets === "275" && randomYTargets === "225") {
            if (!sinkTug2.includes("tug2Hit2")) {
                sinkTug2.push("tug2Hit2");
                if (sinkTug2.length === 2) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                        //alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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
                                $.post('/api/score/score', {
                                    gameName: 'battlegame',
                                    score: clicks,
                                    uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                    initials: initials
                                }).then(response => {
                                    console.log(response)
                                });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }
                    console.log(sinkTug2);
                }
            }
        } else if (randomXTargets === "75" && randomYTargets === "375") {
            if (!sinkTanker2.includes("tanker2Hit1")) {
                sinkTanker2.push("tanker2Hit1");
                if (sinkTanker2.length === 3) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                       // alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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
                                $.post('/api/score/score', {
                                    gameName: 'battlegame',
                                    score: clicks,
                                    uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                    initials: initials
                                }).then(response => {
                                    console.log(response)
                                });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }
                    console.log(sinkTanker2);
                }
            }
        } else if (randomXTargets === "125" && randomYTargets === "375") {
            if (!sinkTanker2.includes("tanker2Hit2")) {
                sinkTanker2.push("tanker2Hit2");
                if (sinkTanker2.length === 3) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                       // alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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
                                $.post('/api/score/score', {
                                    gameName: 'battlegame',
                                    score: clicks,
                                    uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                    initials: initials
                                }).then(response => {
                                    console.log(response)
                                });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }
                    console.log(sinkTanker2);
                }
            }
        } else if (randomXTargets === "175" && randomYTargets === "375") {
            if (!sinkTanker2.includes("tanker2Hit3")) {
                sinkTanker2.push("tanker2Hit3");
                if (sinkTanker2.length === 3) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                        //alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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
                                $.post('/api/score/score', {
                                    gameName: 'battlegame',
                                    score: clicks,
                                    uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                    initials: initials
                                }).then(response => {
                                    console.log(response)
                                });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }
                    console.log(sinkTanker2);
                }
            }
        } else if (randomXTargets === "375" && randomYTargets === "275") {
            if (!sinkCarrier.includes("carrierHit1")) {
                sinkCarrier.push("carrierHit1");
                if (sinkCarrier.length === 4) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                        //alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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
                                $.post('/api/score/score', {
                                    gameName: 'battlegame',
                                    score: clicks,
                                    uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                    initials: initials
                                }).then(response => {
                                    console.log(response)
                                });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }
                    console.log(sinkCarrier);
                }
            }
        } else if (randomXTargets === "375" && randomYTargets === "325") {
            if (!sinkCarrier.includes("carrierHit2")) {
                sinkCarrier.push("carrierHit2");
                if (sinkCarrier.length === 4) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                        //alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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
                                $.post('/api/score/score', {
                                    gameName: 'battlegame',
                                    score: clicks,
                                    uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                    initials: initials
                                }).then(response => {
                                    console.log(response)
                                });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }
                    console.log(sinkCarrier);
                }
            }
        } else if (randomXTargets === "375" && randomYTargets === "375") {
            if (!sinkCarrier.includes("carrierHit3")) {
                sinkCarrier.push("carrierHit3");
                if (sinkCarrier.length === 4) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                        //alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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
                                $.post('/api/score/score', {
                                    gameName: 'battlegame',
                                    score: clicks,
                                    uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                    initials: initials
                                }).then(response => {
                                    console.log(response)
                                });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }

                    console.log(sinkCarrier);
                }
            }
        } else if (randomXTargets === "375" && randomYTargets === "425") {
            if (!sinkCarrier.includes("carrierHit4")) {
                sinkCarrier.push("carrierHit4");
                if (sinkCarrier.length === 4) {
                    ++sunkenCount;
                    $("#sink").html(" ");
                    $("#sink").append(sunkenCount);
                    console.log("sunken boats : " + sunkenCount);
                    if (sunkenCount == 5) {
                      //  alert("you win! You hit the final target and sunk all battleships with  " + clicks + "missiles!");
                        //grab user-id

                        var firebaseuid = document
                            .getElementById('battleGamewrapper')
                            .getAttribute('data-id')
                        console.log(firebaseuid)
                        if (firebaseuid) {
                            $("#battlegame-save-modal").modal("show");
                            $("#battlegame-save-modal-title").text(`You Win! You sunk all the battleships! Your score: ${clicks}`);

                            $("#battlegame-save-btn").on("click", function () {
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
                                $.post('/api/score/score', {
                                    gameName: 'battlegame',
                                    score: clicks,
                                    uid: document.getElementById("battleGameCanvas").getAttribute("data-id"),
                                    initials: initials
                                }).then(response => {
                                    console.log(response)
                                });
                                $("#battlegame-save-modal").modal("hide");
                            });
                        }
                    }


                    console.log(sinkCarrier);
                }
            }
        } else {
            console.log("no sunken boats yet");
        }
    }

})

