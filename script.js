```javascript
/* =========================================================
   SRI VARSHINI SUKHAMANCHI
   PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    /* Close menu after clicking a navigation link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */

const animatedElements = document.querySelectorAll(
    ".timeline-item, " +
    ".project-card, " +
    ".skill-card, " +
    ".highlight-card, " +
    ".education-card, " +
    ".cert-card"
);


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   STAGGERED CARD ANIMATION
   ========================= */

const cardGroups = [
    ".skill-card",
    ".project-card",
    ".highlight-card",
    ".education-card",
    ".cert-card"
];


cardGroups.forEach(selector => {

    const cards = document.querySelectorAll(selector);

    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${(index % 4) * 0.08}s`;

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
   ========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(84, 38, 61, 0.06)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================
   ACTIVE NAVIGATION
   ========================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll("nav a");

const updateActiveNavigation = () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.style.color = "";

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.style.color = "var(--rose)";

        }

    });

};


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================
   SMOOTH INTERNAL LINKS
   ========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (
            targetId === "#" ||
            targetId.length <= 1
        ) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const offset = 75;

        const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

    });

});


/* =========================
   HERO PARALLAX
   ========================= */

const heroVisual =
    document.querySelector(".hero-visual");

if (heroVisual) {

    window.addEventListener("mousemove", event => {

        const x =
            (window.innerWidth / 2 - event.clientX) / 70;

        const y =
            (window.innerHeight / 2 - event.clientY) / 70;

        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* =========================
   CURRENT YEAR
   ========================= */

const yearElement =
    document.querySelector(".footer-bottom");

if (yearElement) {

    const currentYear =
        new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} Sri Varshini Sukhamanchi. Built with curiosity & code.`;

}
```
