// =========================================
// Typing Animation
// =========================================

const roles = [
    "Embedded Systems Engineer",
    "IoT Developer",
    "PCB Designer",
    "Electronics Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typing.textContent = currentRole.substring(0, charIndex++);

    } else {

        typing.textContent = currentRole.substring(0, charIndex--);

    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentRole.length + 1) {

        isDeleting = true;
        speed = 1500;

    }

    if (isDeleting && charIndex === 0) {

        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// =========================================
// Scroll Reveal Animation
// =========================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section,.card,.skill-card,.project,.certificate li").forEach(el=>{

    el.classList.add("hidden");
    observer.observe(el);

});


// =========================================
// Active Navigation
// =========================================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// =========================================
// Scroll To Top Button
// =========================================

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// =========================================
// Dark Mode
// =========================================

const darkBtn=document.createElement("button");

darkBtn.id="darkBtn";

darkBtn.innerHTML="🌙";

document.body.appendChild(darkBtn);

darkBtn.onclick=()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML="☀️";

    }else{

        darkBtn.innerHTML="🌙";

    }

};


// =========================================
// Smooth Scrolling
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// =========================================
// Hero Image Hover
// =========================================

const heroImage=document.querySelector(".hero-right img");

if(heroImage){

heroImage.addEventListener("mousemove",(e)=>{

heroImage.style.transform="scale(1.05)";

});

heroImage.addEventListener("mouseleave",()=>{

heroImage.style.transform="scale(1)";

});

}


// =========================================
// Console Welcome
// =========================================

console.log("Welcome to Kalpana's Portfolio");
