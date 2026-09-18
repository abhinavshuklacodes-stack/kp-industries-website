const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menuOverlay = document.getElementById("menuOverlay");
const menuLinks = document.querySelectorAll(".menu a");

menuBtn.addEventListener("click", () => {
    menuOverlay.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    menuOverlay.classList.remove("open");
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuOverlay.classList.remove("open");
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();
