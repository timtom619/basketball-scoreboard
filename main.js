const teamScore = document.querySelector(".team-score");
const guestScore = document.querySelector(".guest-score");

// Add one logic
let btnOneHome = document.getElementById("btn1-home");
btnOneHome.addEventListener("click", addOne);

let btnOneGuest = document.getElementById("btn1-guest");
btnOneGuest.addEventListener("click", addOne);

function addOne(e) {
  let currentValue;
  if(e.srcElement.id.includes("home")) {
    currentValue = Number(teamScore.textContent)
    currentValue += 1;
    teamScore.textContent = currentValue;
  } else {
    currentValue = Number(guestScore.textContent)
    currentValue += 1;
    guestScore.textContent = currentValue;
  }
}

// Add two logic
let btnTwoHome = document.getElementById("btn2-home");
btnTwoHome.addEventListener("click", addTwo);

let btnTwoGuest = document.getElementById("btn2-guest");
btnTwoGuest.addEventListener("click", addTwo);

function addTwo(e) {
  let currentValue;
  if(e.srcElement.id.includes("home")) {
    currentValue = Number(teamScore.textContent)
    currentValue += 2;
    teamScore.textContent = currentValue;
  } else {
    currentValue = Number(guestScore.textContent)
    currentValue += 2;
    guestScore.textContent = currentValue;
  }
}

// Add three logic
let btnThreeHome = document.getElementById("btn3-home");
btnThreeHome.addEventListener("click", addThree);

let btnThreeGuest = document.getElementById("btn3-guest");
btnThreeGuest.addEventListener("click", addThree);

function addThree(e) {
  let currentValue;
  if(e.srcElement.id.includes("home")) {
    currentValue = Number(teamScore.textContent)
    currentValue += 3;
    teamScore.textContent = currentValue;
  } else {
    currentValue = Number(guestScore.textContent)
    currentValue += 3;
    guestScore.textContent = currentValue;
  }
}

// Game clock logic
const clockTimer = document.querySelector(".game-clock-timer");
let seconds = 0;
let minute = 0;

function startClock() {
  if (seconds > 8) {
    seconds++
    clockTimer.textContent = `00:${seconds}`

    if (seconds === 60) {
      seconds = 0;
      minute++;
      clockTimer.textContent = `0${minute}:0${seconds}`
    }
  } else {
    seconds++;
    clockTimer.textContent = `0${minute}:0${seconds}`
  }
}

function stopClock() {
  clearInterval(timerID);
  console.log("clock stopped");
}

const timerID = setInterval(startClock, 1000)

