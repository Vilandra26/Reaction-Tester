let start = new Date().getTime();
let bestTime = Infinity;

function makeShapeAppear() {
    let top = Math.random() * 300;
    let left = Math.random() * 800;
    let width = (Math.random() * 200) + 100;
    let color = Math.floor(Math.random() * 16777215).toString(16);
    let form = (Math.random() * 100) - 20;
    document.getElementById("shape").style.borderRadius = form + "%";
    document.getElementById("shape").style.backgroundColor = "#" + color;
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearAfterDelay();

document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000;

    if (timeTaken < bestTime) { 
        bestTime = timeTaken;
        document.getElementById("bestTime").innerHTML = bestTime + " sec";
    }

    document.getElementById("timeTaken").innerHTML = timeTaken + " sec";
    appearAfterDelay();
}