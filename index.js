// Your code here

const dod = document.getElementById("dodger");

function moveDodgerRight() {
    const ln = dodger.style.left.replace("px","");
    const l = parseInt(ln,10);

    if (l < 360) {
        dodger.style.left = `${l+1}px`;
    }
}

function moveDodgerLeft() {
    const ln = dodger.style.left.replace("px","");
    const l = parseInt(ln,10);

    if (l > 0) {
        dodger.style.left = `${l-1}px`;
    }
}

document.addEventListener("keydown", function(e){
if (e.key === "ArrowRight") {moveDodgerRight();}
else if (e.key === "ArrowLeft") {moveDodgerLeft();}

})