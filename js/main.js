document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MENÚ MÓVIL
    // =========================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("mobile-open");
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("mobile-open");
            });

        });
    }


    // =========================
    // ANIMACIONES AL HACER SCROLL
    // =========================

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    // =========================
    // AÑO AUTOMÁTICO DEL FOOTER
    // =========================

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // =========================
    // SCROLL SUAVE
    // =========================

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});