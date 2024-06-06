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

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            } else {
                entry.target.classList.remove("in-view");
            }
        });
    });

    const allAnimatedElements = document.querySelectorAll('.animate');

    allAnimatedElements.forEach((element) => observer.observe(element));
});