const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburgerClose");
const bgHeader = document.getElementById("bg-header");

hamburger.addEventListener('click', () => {
    hamburger.style.display = "none";
    hamburgerClose.style.display = "block";
    bgHeader.classList.remove()
    bgHeader.style.background = "black";
});

hamburgerClose.addEventListener('click', () => {
    hamburger.style.display = "block";
    hamburgerClose.style.display = "none";
    bgHeader.style.background = "none"
    bgHeader.style.backgroundImage = "url(./src/images/desktop/image-hero.jpg)"
    bgHeader.style.backgroundSize = "cover";
});

