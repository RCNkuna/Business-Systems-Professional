// Scroll Reveal Animation

const reveals = document.querySelectorAll("section");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
            section.classList.add("reveal");
        }
    });
});
// Sticky Header Effect

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }

});
