let homeEl = document.getElementById("home-count")
let guestEl = document.getElementById("guest-count")
let countHome = 0
let countGuest = 0

function addHome1() {
    countHome += 1
    homeEl.textContent = countHome
}

function addHome2() {
    countHome += 2
    homeEl.textContent = countHome
}

function addHome3() {
    countHome += 3
    homeEl.textContent = countHome
}

function addGuest1() {
    countGuest += 1
    guestEl.textContent = countGuest
}

function addGuest2() {
    countGuest += 2
    guestEl.textContent = countGuest
}

function addGuest3() {
    countGuest += 3
    guestEl.textContent = countGuest
}

function reset() {
    
    homeEl.textContent = 0
    guestEl.textContent = 0
    countHome = 0
    countGuest = 0
    
}