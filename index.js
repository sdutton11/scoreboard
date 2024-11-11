let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let scoreHome = 0

let scoreGuest = 0


homeScore.textContent = scoreHome

guestScore.textContent = scoreGuest

function onePointH() {
    scoreHome += 1
    homeScore.textContent = scoreHome
}

function twoPointH() {
    scoreHome += 2
    homeScore.textContent = scoreHome
}

function threePointH() {
    scoreHome += 3
    homeScore.textContent = scoreHome
}

function onePointG() {
    scoreGuest += 1
    guestScore.textContent = scoreGuest
}

function twoPointG() {
    scoreGuest += 2
    guestScore.textContent = scoreGuest
}

function threePointG() {
    scoreGuest += 3
    guestScore.textContent = scoreGuest
}

function newGame() {
    scoreGuest = 0
    scoreHome = 0
    guestScore.textContent = scoreGuest
    homeScore.textContent = scoreHome
}
