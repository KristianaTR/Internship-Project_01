const currentUser = JSON.parse(localStorage.getItem("currentUser"));

function handleAccess () {
    if (!currentUser) {
        restrictAccess();
    }
}

function restrictAccess () {
    const currentPage = window.location.pathname;
    const restrictedPages = ["/home.html", "/yourMovies.html", "/profile.html"];

    if (restrictedPages.includes(currentPage)) {
        window.location.href = "login.html";
    }
}

function skipSignIn () {
    if (currentUser) {
        const currentPage = window.location.pathname;
        if (currentPage === "/login.html") {
            window.location.href = "home.html";
        }
    }
}

//add styling to the active link
document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
});

handleAccess();
skipSignIn();