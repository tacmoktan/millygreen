
const navbar = document.querySelector(".navigation-bar");
const navLinksContainer = navbar.querySelector(".nav-links-container");
const bar = navbar.querySelector("#bar");
let isNavbarClosed = true;

function openNavbar() {
    navLinksContainer.style.display = "flex";
    isNavbarClosed = false;
}

function closeNavbar() {
    navLinksContainer.style.display = "none";
    isNavbarClosed = true;
}

window.onresize = () => {
    (window.innerWidth > 768) ? openNavbar() : closeNavbar()
}

navbar.onclick = (e) => {
    if (e.target === bar)
        isNavbarClosed ? openNavbar() : closeNavbar()
    else
        closeNavbar()
}

