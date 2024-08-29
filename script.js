document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is loaded");

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {
        console.log("Menu toggle button and navigation element found");
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("show-nav");
            console.log("Navigation toggled");
        });
    } else {
        console.log("Menu toggle button or navigation element not found");
    }
});
