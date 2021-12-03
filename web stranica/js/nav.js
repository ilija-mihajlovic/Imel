const lines = document.querySelector(".lines");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

lines.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //lines Animation
    lines.classList.toggle("toggle");
});