const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function(){

    const card = document.querySelector(".card");

    const maxX = card.clientWidth - noBtn.clientWidth;
    const maxY = card.clientHeight - noBtn.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

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