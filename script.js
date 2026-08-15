// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// Tutup menu setelah memilih navigasi

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// ==============================
// TAHUN FOOTER
// ==============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ==============================
// SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(
    ".profile-card, .member-card, .schedule-day"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.08
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});