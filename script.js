/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");
        menuToggle.classList.toggle("active");

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");
            menuToggle.classList.remove("active");

        });

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 40) {

            navbar.style.boxShadow =
                "0 10px 35px rgba(33,23,45,.07)";

        } else {

            navbar.style.boxShadow = "none";

        }

    },
    {
        passive: true
    }
);


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorOutline =
    document.querySelector(".cursor-outline");


if (
    cursorDot &&
    cursorOutline &&
    window.matchMedia("(pointer: fine)").matches
) {

    window.addEventListener(
        "mousemove",
        event => {

            cursorDot.style.left =
                `${event.clientX}px`;

            cursorDot.style.top =
                `${event.clientY}px`;

            cursorOutline.animate(
                {
                    left: `${event.clientX}px`,
                    top: `${event.clientY}px`
                },
                {
                    duration: 450,
                    fill: "forwards"
                }
            );

        }
    );


    const interactiveElements =
        document.querySelectorAll(
            "a, button, .project-card"
        );


    interactiveElements.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursorOutline.style.width =
                    "58px";

                cursorOutline.style.height =
                    "58px";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursorOutline.style.width =
                    "38px";

                cursorOutline.style.height =
                    "38px";

            }
        );

    });

}


/* =========================================================
   HERO PARALLAX
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");

if (heroVisual) {

    window.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 800) {
                return;
            }

            const x =
                (event.clientX / window.innerWidth - .5);

            const y =
                (event.clientY / window.innerHeight - .5);


            const photoCard =
                document.querySelector(".photo-card");

            const floatingCards =
                document.querySelectorAll(".floating-card");


            if (photoCard) {

                photoCard.style.transform =
                    `rotate(3deg)
                     translate(${x * 10}px, ${y * 10}px)`;

            }


            floatingCards.forEach(
                (card, index) => {

                    const strength =
                        index === 0 ? 18 : -14;

                    card.style.transform =
                        `translate(
                            ${x * strength}px,
                            ${y * strength}px
                        )`;

                }
            );

        }
    );

}


/* =========================================================
   PROJECT CARD TILT
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 800) {
                return;
            }

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const rotateX =
                ((y / rect.height) - .5) * -4;

            const rotateY =
                ((x / rect.width) - .5) * 4;


            card.style.transform =
                `translateY(-8px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================================================
   SMOOTH ANCHOR NAVIGATION
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   PHOTO FALLBACK
========================================================= */

const profilePhoto =
    document.querySelector(".profile-photo");

const photoPlaceholder =
    document.querySelector(".photo-placeholder");


if (profilePhoto && photoPlaceholder) {

    profilePhoto.addEventListener(
        "load",
        () => {

            photoPlaceholder.style.display =
                "none";

        }
    );


    profilePhoto.addEventListener(
        "error",
        () => {

            profilePhoto.style.display =
                "none";

            photoPlaceholder.style.display =
                "flex";

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navigationLinks.forEach(link => {

                        link.classList.remove("active");

                    });


                    const activeLink =
                        document.querySelector(
                            `.nav-links a[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }

            });

        },
        {
            rootMargin:
                "-40% 0px -50% 0px"
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});
