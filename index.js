let hmScore = 0
let totScore = document.getElementById("hm-scores")

function point() {
    hmScore = hmScore + 1
    totScore.textContent = hmScore 
}

function points() {
    hmScore = hmScore + 2
    totScore.textContent = hmScore 
}

function pointss() {
    hmScore = hmScore + 3
    totScore.textContent = hmScore 
}


function nepoint() {
    if (hmScore <= 0) {
        alert("Points cannot be negative");
        return ;
    }
    hmScore = hmScore - 1
    totScore.textContent = hmScore 
}

function nepoints() {
    if (hmScore <= 1) {
        alert("Points cannot be negative");
        return ;
    }
    hmScore = hmScore - 2
    totScore.textContent = hmScore 
   
}

function nepointss() {
    if (hmScore <= 2) {
        alert("Points cannot be negative");
        return ;
    }
    hmScore = hmScore - 3
    totScore.textContent = hmScore 
}



let guPoint = 0
let guScore = document.getElementById("gu-scores")

function gupoint() {
    guPoint = guPoint + 1
    guScore.textContent = guPoint 
}

function gupoints() {
    guPoint = guPoint + 2
    guScore.textContent = guPoint
}

function gupointss() {
    guPoint = guPoint + 3
    guScore.textContent = guPoint
}


function negupoint() {
    if (guPoint <= 0) {
        alert("Points cannot be negative");
        return ;
    }
    guPoint = guPoint - 1
    guScore.textContent = guPoint 
}

function negupoints() {
    if (guPoint <= 1) {
        alert("Points cannot be negative");
        return ;
    }
    guPoint = guPoint - 2
    guScore.textContent = guPoint
}

function negupointss() {
    if (guPoint <= 2) {
        alert("Points cannot be negative");
        return ;
    }
    guPoint = guPoint - 3
    guScore.textContent = guPoint

   
}



function reset() {
    hmScore = hmScore * 0
    totScore.textContent = hmScore 
    guPoint = guPoint * 0
    guScore.textContent = guPoint
}