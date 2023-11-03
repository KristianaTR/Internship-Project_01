document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-link");
    console.log(window.location.pathname);

    navLinks.forEach((link) => {
        console.log(link.getAttribute("href"));
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
});