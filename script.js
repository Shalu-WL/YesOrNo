const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");

function moveButton() {
    const maxX = card.clientWidth - noBtn.clientWidth;
    const maxY = card.clientHeight - noBtn.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function goNext() {
    window.location.href = "NextPage.html";
}

function goMainPage() {
    window.location.href = "MainPage.html";
}


function playSound() {
    const audio = document.getElementById("clickSound");
    audio.currentTime = 0; 
    audio.play();
}   
