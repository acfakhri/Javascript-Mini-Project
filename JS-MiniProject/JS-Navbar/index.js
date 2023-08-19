const navbarAi = document.querySelector(".navbar");

const bottomContainerAi = document.querySelector(".bottom-container");

console.log(navbarAi.offsetHeight);
console.log(bottomContainerAi.offsetTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > bottomContainerAi.offsetTop - navbarAi.offsetHeight - 50) {
        navbarAi.classList.add("active");
    } else {
        navbarAi.classList.remove("active");
    }
});