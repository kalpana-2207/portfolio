// ===============================
// Smooth Scroll Navigation
// ===============================

document.querySelectorAll('.nav-links a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Navbar Shadow
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,.12)";

    }

    else{

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.05)";

    }

});
// ===============================
// DARK MODE
// ===============================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.innerHTML="☀️";

    }

    else{

        themeToggle.innerHTML="🌙";

    }

});
window.addEventListener("scroll",()=>{

    const scrollTop=window.scrollY;

    const height=document.documentElement.scrollHeight-window.innerHeight;

    const progress=(scrollTop/height)*100;

    document.getElementById("progress-bar").style.width=progress+"%";

});
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
const text=[

"Embedded Systems",

"IoT Developer",

"PCB Designer",

"STM32 Programmer",

"ECE Student"

];

let i=0;

let j=0;

let current="";

let isDeleting=false;

function type(){

    current=text[i];

    document.getElementById("typing").textContent=current.substring(0,j);

    if(!isDeleting){

        j++;

        if(j>current.length){

            isDeleting=true;

            setTimeout(type,1200);

            return;

        }

    }

    else{

        j--;

        if(j===0){

            isDeleting=false;

            i=(i+1)%text.length;

        }

    }

    setTimeout(type,isDeleting?60:120);

}

type();