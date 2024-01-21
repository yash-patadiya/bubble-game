var timer = 60;
var score = 0;
var rn1 = 0;
var strval = 0;
function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 560; i++) {
        var val = Math.floor(Math.random() * 10);
        clutter += `<div id="bubble">${val}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}
function runTimer() {

    var timeint = setInterval(function () {
        timer--;
        document.querySelector("#box.tim").textContent = timer;
        if (timer === 0) {
            // You can add any code here to execute when the timer reaches 0
            clearInterval(timeint); // Stop the timer when it reaches 0
            document.querySelector("#pbottom").innerHTML = "<h1>GAME OVER</h1>";
            document.querySelector("#box.hit").textContent = 0;
        }
    }, 1000);


}
function makeHit() {
    rn1 = Math.floor(Math.random() * 10);
    document.querySelector("#box.hit").textContent = rn1;
}
function increaseScore() {
    score += 10;
    document.querySelector("#box.value").textContent = score;
}
document.querySelector("#pbottom").addEventListener('click', function (details) {
    strval = (Number(details.target.textContent));
    if (rn1 == strval) {
        increaseScore();
        makeBubble();
        makeHit();
    }
})

makeBubble();

runTimer();
makeHit();