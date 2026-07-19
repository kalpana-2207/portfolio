/*=========================================
        TYPING ANIMATION
=========================================*/

const typing = document.getElementById("typing");

const roles = [

    "Electronics & Communication Engineer",

    "Embedded Systems Enthusiast",

    "IoT Developer",

    "PCB Designer",

    "Hardware Developer"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typing.textContent = currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typing.textContent = currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/*=========================================
        SCROLL TO TOP
=========================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


/*=========================================
        DARK MODE
=========================================*/

const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

};


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        FADE-IN ANIMATION
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

const hiddenElements = document.querySelectorAll(

".skill-card, .project-card, .certificate-card, .timeline-content, .contact-card, .internship-card"

);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/*=========================================
        SMOOTH BUTTON HOVER
=========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});


/*=========================================
        PAGE LOADED
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});