let scoreHome = 0;
let scoreGuest = 0;
let rounds = 1;

let counterHome = document.getElementById('counter-home')
let counterGuest = document.getElementById('counter-guest')
let counterRounds = document.getElementById('counter-rounds')
let bgHome = document.getElementById('bg-home')
let bgGuest = document.getElementById('bg-guest')

function addOneHome() {
    scoreHome += 1
    counterHome.textContent = scoreHome
    highlightLeader()
}

function addTwoHome() {
    scoreHome += 2
    counterHome.textContent = scoreHome
    highlightLeader()
}

function addThreeHome() {
    scoreHome += 3
    counterHome.textContent = scoreHome
    highlightLeader()
}

function addOneGuest() {
    scoreGuest += 1
    counterGuest.textContent = scoreGuest
    highlightLeader()
}

function addTwoGuest() {
    scoreGuest += 2
    counterGuest.textContent = scoreGuest
    highlightLeader()
}

function addThreeGuest() {
    scoreGuest += 3
    counterGuest.textContent = scoreGuest
    highlightLeader()
}

function newGame() {
    scoreHome = 0
    scoreGuest = 0
    counterHome.textContent = scoreHome
    counterGuest.textContent = scoreGuest
    
    bgHome.classList.remove('leader')
    bgGuest.classList.remove('leader')
    
    rounds ++;
    counterRounds.textContent = rounds;
}


function highlightLeader() {
    if(scoreHome > scoreGuest) {
        bgHome.classList.add('leader')
        bgGuest.classList.remove('leader')
    } else if(scoreHome < scoreGuest) {
        bgHome.classList.remove('leader')
        bgGuest.classList.add('leader')
    } else {
        bgGuest.classList.add('leader')
        bgHome.classList.add('leader')
    }
}

function resetAll() {
    scoreHome = 0
    scoreGuest = 0
    rounds = 1
    counterHome.textContent = scoreHome
    counterGuest.textContent = scoreGuest
    counterRounds.textContent = rounds;
    
    bgHome.classList.remove('leader')
    bgGuest.classList.remove('leader')
    
}