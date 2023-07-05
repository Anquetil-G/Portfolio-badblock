/* -------------------------------- VARIABLES ------------------------------- */

const touchRight = document.getElementById("touch-right");
const touchLeft = document.getElementById("touch-left");

const userContainer1 = document.querySelector(".user-block-container1")
const userContainer2 = document.querySelector(".user-block-container2")
const userContainer3 = document.querySelector(".user-block-container3")
const userBlock = document.getElementById("user-block");
columnBlock = 2;
let timeoutRunning = false;

const badBlockContainer1 = document.querySelector(".bad-block-container1");
const badBlockContainer2 = document.querySelector(".bad-block-container2");
const badBlockContainer3 = document.querySelector(".bad-block-container3");

let badBlockStyle;
let userBlockStyle;

const badBlock1 = document.createElement("div");
const badBlock2 = document.createElement("div");
const badBlock3 = document.createElement("div");
const badBlock4 = document.createElement("div");

let color = "";
let colorSelect = 1;
let speed = 1320;

let block4;

let randomColumn200;
let randomColumn;

const gameOverContainer = document.querySelector(".game-over-container");
const timeSpan = document.getElementById("time");

/* -------------------------------- FUNCTIONS ------------------------------- */

const createBadBlock = () => {
    randomColumn200 = Math.round(Math.random() * 200);
    randomColumn = Math.round(randomColumn200 / 80) + 1;

    if (block4 === true) {
        badBlock4.classList.add("block");
        badBlock4.classList.add("bad-block");

        if (randomColumn === 1) {
            badBlockContainer2.appendChild(badBlock4);
        } else if (randomColumn === 2) {
            badBlockContainer1.appendChild(badBlock4);
        } else if (randomColumn === 3) {
            badBlockContainer1.appendChild(badBlock4);
        };
    } else if (color === "2") {
        badBlock2.classList.add("block");
        badBlock2.classList.add("bad-block");

        if (randomColumn === 1) {
            badBlockContainer1.appendChild(badBlock2);
        } else if (randomColumn === 2) {
            badBlockContainer2.appendChild(badBlock2);
        } else if (randomColumn === 3) {
            badBlockContainer3.appendChild(badBlock2);
        };
    } else if (color === "3") {
        badBlock3.classList.add("block");
        badBlock3.classList.add("bad-block");

        if (randomColumn === 1) {
            badBlockContainer1.appendChild(badBlock3);
        } else if (randomColumn === 2) {
            badBlockContainer2.appendChild(badBlock3);
        } else if (randomColumn === 3) {
            badBlockContainer3.appendChild(badBlock3);
        };
    } else if (color === "1") {
        badBlock1.classList.add("block");
        badBlock1.classList.add("bad-block");

        if (randomColumn === 1) {
            badBlockContainer1.appendChild(badBlock1);
        } else if (randomColumn === 2) {
            badBlockContainer2.appendChild(badBlock1);
        } else if (randomColumn === 3) {
            badBlockContainer3.appendChild(badBlock1);
        };
    };
    block4 = false;
};

const badBlockSelect = () => {
    if (colorSelect === 1) {
        color = "1";
        colorSelect++;
    } else if (colorSelect === 2) {
        color = "2";
        colorSelect = 3;
    } else if (colorSelect === 3) {
        color = "3";
        colorSelect = 1;
    };
};

const collisionDetect = (user, box1, box2, box3, box4) => {
    const userStyle = getComputedStyle(user);
    const boxStyle1 = getComputedStyle(box1);
    const boxStyle2 = getComputedStyle(box2);
    const boxStyle3 = getComputedStyle(box3);
    const boxStyle4 = getComputedStyle(box4);

    let userTop = parseInt(userStyle.top);
    let userWidth = parseInt(userStyle.width);
    let userBottom = parseInt(userStyle.bottom);
    let userLeft = parseInt(userStyle.left);

    let box1Top = parseInt(boxStyle1.top);
    let box1Bottom = parseInt(boxStyle1.bottom);
    let box1Left = parseInt(boxStyle1.left);

    let box2Top = parseInt(boxStyle2.top);
    let box2Bottom = parseInt(boxStyle2.bottom);
    let box2Left = parseInt(boxStyle2.left);

    let box3Top = parseInt(boxStyle3.top);
    let box3Bottom = parseInt(boxStyle3.bottom);
    let box3Left = parseInt(boxStyle3.left);

    let box4Top = parseInt(boxStyle4.top);
    let box4Bottom = parseInt(boxStyle4.bottom);
    let box4Left = parseInt(boxStyle4.left);

    if (userLeft === box1Left &&
    userTop < box1Top + userWidth &&
    userBottom < box1Bottom + userWidth) {
        gameOver();
    };

    if (userLeft === box2Left &&
    userTop < box2Top + userWidth &&
    userBottom < box2Bottom + userWidth) {
        gameOver();
    };

    if (userLeft === box3Left &&
    userTop < box3Top + userWidth &&
    userBottom < box3Bottom + userWidth) {
        gameOver();
    };

    if (userLeft === box4Left &&
    userTop < box4Top + userWidth &&
    userBottom < box4Bottom + userWidth) {
        gameOver();
    };
};

const gameOver = () => {
    gameOverContainer.classList.remove("remove");
    clearInterval(countdownInterval);
    clearInterval(intervalCreateBadBlock)
    clearInterval(intervalCreateBadBlock4)
    clearInterval(intervalRemoveBadBlock)
    timeoutRunning = true;
    timeSpan.textContent = countdownValue;
};
const goToLeft = () => {
    const userBlockKey = document.getElementById("user-block");
    if (columnBlock === 2) {
        timeoutRunning = true;
        userBlockKey.classList.add("block-to-left1");
        setTimeout(() => {
            userBlockKey.classList.remove("block-to-left1");
            timeoutRunning = false;
            userContainer2.innerHTML = "";
            userContainer1.innerHTML = `<div id="user-block" class="block"></div>`;
        }, 110);
        columnBlock = 1;
    } else if (columnBlock === 3) {
        timeoutRunning = true;
        userBlockKey.classList.add("block-to-left1");
        setTimeout(() => {
            userBlockKey.classList.remove("block-to-left1");
            timeoutRunning = false;
            userContainer3.innerHTML = "";
            userContainer2.innerHTML = `<div id="user-block" class="block"></div>`;
        }, 110);
        columnBlock = 2;
    };
};
const goToRight = () => {
    const userBlockKey = document.getElementById("user-block");
    if (columnBlock === 1) {
        timeoutRunning = true;
        userBlockKey.classList.add("block-to-right1");
        setTimeout(() => {
            userBlockKey.classList.remove("block-to-right1");
            timeoutRunning = false;
            userContainer1.innerHTML = "";
            userContainer2.innerHTML = `<div id="user-block" class="block"></div>`;
        }, 110);
        columnBlock = 2;
    } else if (columnBlock === 2) {
        timeoutRunning = true;
        userBlockKey.classList.add("block-to-right1");
        setTimeout(() => {
            userBlockKey.classList.remove("block-to-right1");
            timeoutRunning = false;
            userContainer2.innerHTML = "";
            userContainer3.innerHTML = `<div id="user-block" class="block"></div>`;
        }, 110);
        columnBlock = 3;
    };
};

/* -------------------------------- USER-MOVE ------------------------------- */

window.addEventListener("keydown", (e) => {
    if (timeoutRunning === false) {
        if (e.key.indexOf("Arrow") !== -1) {
            if (e.key.indexOf("ArrowLeft") !== -1) {
                goToLeft();
            };
            if (e.key.indexOf("ArrowRight") !== -1) {
                goToRight();
            };
        };
    };
});
touchLeft.addEventListener("click", () => {
    if (timeoutRunning === false) {
        goToLeft();
    };
});
touchRight.addEventListener("click", () => {
    if (timeoutRunning === false) {
        goToRight();
    };
});

/* -------------------------------- BAD-BLOCK ------------------------------- */

let intervalCreateBadBlock;
let intervalCreateBadBlock4;
setTimeout(() => {
    intervalCreateBadBlock = setInterval(() => {
        badBlockSelect();
        createBadBlock();
    }, 1250);
    intervalCreateBadBlock4 = setInterval(() => {
        block4 = true;
        createBadBlock();
    }, 3000);
}, 1700);

let intervalRemoveBadBlock;

intervalRemoveBadBlock = setInterval(() => {
    const badBlockStyle1 = getComputedStyle(badBlock1);
    const badBlockStyle2 = getComputedStyle(badBlock2);
    const badBlockStyle3 = getComputedStyle(badBlock3);
    const badBlockStyle4 = getComputedStyle(badBlock4);

    const userBlockC = document.getElementById("user-block");
    collisionDetect(userBlockC, badBlock1, badBlock2, badBlock3, badBlock4);
    
    if (badBlockStyle1.top > document.body.clientHeight + 20) {
        badBlock1.remove();
    };
    if (badBlockStyle2.top > document.body.clientHeight + 20) {
        badBlock2.remove();
    };
    if (badBlockStyle3.top > document.body.clientHeight + 20) {
        badBlock3.remove();
    };
    if (badBlockStyle4.top > document.body.clientHeight + 20) {
        badBlock3.remove();
    };
}, 3);

/* ------------------------------- STOP WATCH ------------------------------- */

let minutes = 0;
let seconds = 0;
let countdownValue;
let countdownInterval;

const countdown = () => {
    countdownInterval = setInterval(() => {
        if (seconds === 59) {
            seconds = 0;
            minutes++;
            if (minutes < 2) {
                    countdownValue = `${minutes} minute et ${seconds} secondes`
            } else {
                    countdownValue = `${minutes} minutes et ${seconds} secondes`
            };
        } else {
            seconds++;
            if (minutes < 2) {
                countdownValue = `${minutes} minute et ${seconds} secondes`
            } else {
                countdownValue = `${minutes} minutes et ${seconds} secondes`
            };
        };
    }, 1000);
};
countdown();