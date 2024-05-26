function toggleNavbox() {
    const navmenu = document.getElementById("navmenu");

    if (navmenu.style.display === "flex") {
        navmenu.style.display = "none";
    } else {
        navmenu.style.display = "flex";
    }
}

window.addEventListener("resize", () => {
    const navmenu = document.getElementById("navmenu");

    if (window.innerWidth >= 650) {
        navmenu.style.display = "flex";
    } else {
        navmenu.style.display = "none";
    }
});