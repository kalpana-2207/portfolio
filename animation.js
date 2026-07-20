// ==========================================
// FADE-IN ANIMATION ON SCROLL
// ==========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.15

});


// ==========================================
// ELEMENTS TO ANIMATE
// ==========================================

const animatedElements = document.querySelectorAll(

`
.hero-text,
.hero-image,
.about-card,
.highlight-card,
.journey-card,
.skill-category,
.project-card,
.internship-card,
.certificate-card,
.contact-info,
.contact-form
`

);

animatedElements.forEach(element => {

    element.classList.add("fade-up");

    observer.observe(element);

});


// ==========================================
// STAGGERED CARD ANIMATION
// ==========================================

const cards = document.querySelectorAll(

".journey-card, .project-card, .skill-category, .certificate-card"

);

cards.forEach((card,index)=>{

    card.style.transitionDelay = `${index * 0.1}s`;

});


// ==========================================
// HERO LOAD ANIMATION
// ==========================================

window.addEventListener("load",()=>{

    document.querySelector(".hero-text").classList.add("show");

    document.querySelector(".hero-image").classList.add("show");

});


// ==========================================
// FLOATING BACKGROUND BLOBS
// ==========================================

const blobs = document.querySelectorAll(".blob");

window.addEventListener("mousemove",(e)=>{

    const x = e.clientX/window.innerWidth;

    const y = e.clientY/window.innerHeight;

    blobs.forEach((blob,index)=>{

        const speed = (index+1)*15;

        blob.style.transform =
        `translate(${x*speed}px,${y*speed}px)`;

    });

});


// ==========================================
// PROJECT CARD HOVER EFFECT
// ==========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

const buttons = document.querySelectorAll(

".project-btn,.download-btn,.resume-btn"

);

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        let circle=document.createElement("span");

        circle.classList.add("ripple");

        this.appendChild(circle);

        let x=e.clientX-this.offsetLeft;

        let y=e.clientY-this.offsetTop;

        circle.style.left=x+"px";

        circle.style.top=y+"px";

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});

// LOADER

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.opacity="0";

        setTimeout(()=>{

            document.getElementById("loader").style.display="none";

        },700);

    },1800);

});