/* =========================================================
   YEAR
========================================================= */

const year =
    document.getElementById("year");

if (year) {
    year.textContent =
        new Date().getFullYear();
}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.querySelector(".menu-button");

const nav =
    document.querySelector(".nav");


if (menuButton && nav) {

    menuButton.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "mobile-visible"
            );

        }
    );


    nav.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "mobile-visible"
                    );

                }
            );

        });

}


/* =========================================================
   PROJECT FILTERS
========================================================= */

const filters =
    document.querySelectorAll(".filter");

const projects =
    document.querySelectorAll(".project");


filters.forEach(filter => {

    filter.addEventListener(
        "click",
        () => {

            filters.forEach(button => {

                button.classList.remove(
                    "active"
                );

            });


            filter.classList.add(
                "active"
            );


            const category =
                filter.dataset.filter;


            projects.forEach(project => {

                const categories =
                    project.dataset.category;


                if (
                    category === "all" ||
                    categories.includes(category)
                ) {

                    project.style.display =
                        "flex";

                    requestAnimationFrame(
                        () => {

                            project.style.opacity =
                                "1";

                            project.style.transform =
                                "translateY(0)";

                        }
                    );

                } else {

                    project.style.opacity =
                        "0";

                    project.style.transform =
                        "translateY(15px)";

                    setTimeout(
                        () => {

                            project.style.display =
                                "none";

                        },
                        250
                    );

                }

            });

        }
    );

});


/* =========================================================
   NAVBAR SCROLL
========================================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 40
        ) {

            navbar.style.boxShadow =
                "0 10px 35px rgba(36,21,47,.08)";

        } else {

            navbar.style.boxShadow =
                "none";

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

const cursorRing =
    document.querySelector(".cursor-ring");


if (
    cursorDot &&
    cursorRing &&
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        event => {

            cursorDot.style.left =
                `${event.clientX}px`;

            cursorDot.style.top =
                `${event.clientY}px`;


            cursorRing.animate(
                {
                    left:
                        `${event.clientX}px`,

                    top:
                        `${event.clientY}px`
                },
                {
                    duration: 400,
                    fill: "forwards"
                }
            );

        }
    );


    const interactive =
        document.querySelectorAll(
            "a, button, .project"
        );


    interactive.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursorRing.style.width =
                    "58px";

                cursorRing.style.height =
                    "58px";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursorRing.style.width =
                    "36px";

                cursorRing.style.height =
                    "36px";

            }
        );

    });

}


/* =========================================================
   HERO PHOTO PARALLAX
========================================================= */

const photoCard =
    document.querySelector(".photo-card");


if (photoCard) {

    window.addEventListener(
        "mousemove",
        event => {

            if (
                window.innerWidth < 800
            ) {
                return;
            }


            const x =
                event.clientX /
                window.innerWidth -
                .5;

            const y =
                event.clientY /
                window.innerHeight -
                .5;


            photoCard.style.transform =
                `
                rotate(3deg)
                translate(
                    ${x * 8}px,
                    ${y * 8}px
                )
                `;

        }
    );

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const id =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !id ||
                    id === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        id
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView(
                    {
                        behavior:
                            "smooth",

                        block:
                            "start"
                    }
                );

            }
        );

    });


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav a"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(
                            link => {

                                link.classList
                                    .remove(
                                        "active"
                                    );

                            }
                        );


                        const active =
                            document.querySelector(
                                `.nav a[href="#${entry.target.id}"]`
                            );


                        if (active) {

                            active.classList
                                .add(
                                    "active"
                                );

                        }

                    }

                }
            );

        },
        {
            rootMargin:
                "-40% 0px -50% 0px"
        }
    );


sections.forEach(section => {

    sectionObserver.observe(
        section
    );

});


/* =========================================================
   PHOTO FALLBACK
========================================================= */

const profile =
    document.querySelector(
        ".profile-photo"
    );

const placeholder =
    document.querySelector(
        ".photo-placeholder"
    );


if (profile && placeholder) {

    profile.addEventListener(
        "error",
        () => {

            profile.style.display =
                "none";

            placeholder.style.display =
                "flex";

        }
    );


    profile.addEventListener(
        "load",
        () => {

            placeholder.style.display =
                "none";

        }
    );

}
