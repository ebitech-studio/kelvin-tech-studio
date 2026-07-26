// ===============================
// TYPING ANIMATION
// ===============================

const typing = document.getElementById("typing");

const words = [
    "Professional Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Graphics Designer",
    "Freelancer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let currentLetter = "";

function typeEffect() {

    if (!typing) return;

    if (wordIndex >= words.length) {
        wordIndex = 0;
    }

    currentWord = words[wordIndex];
    currentLetter = currentWord.slice(0, ++letterIndex);

    typing.textContent = currentLetter;

    if (currentLetter.length === currentWord.length) {

        wordIndex++;
        letterIndex = 0;

        setTimeout(typeEffect, 1500);

    } else {

        setTimeout(typeEffect, 120);

    }

}

typeEffect();
// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ===============================
// NAVIGATION ACTIVE LINK
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});
// ===============================
// FADE-IN ANIMATION
// ===============================

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (sectionTop < screenPosition) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

// Run once when the page loads
revealSections();
// ===============================
// EMAILJS CONTACT FORM
// ===============================

emailjs.init("wpCYQsT-kYJFcHgW7");

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_sawo70l",
            "template_pd8cuje",
            this
        )
        .then(function () {

            alert("Message sent successfully!");
            contactForm.reset();

        })
        .catch(function (error) {

            console.log(error);

            alert(
                "Status: " + error.status +
                "\nMessage: " + error.text
            );

        });

    });

}
// ================= PRELOADER =================

window.addEventListener("load", function(){

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.display = "none";

    }

});
// ===============================
// DARK MODE
// ===============================

const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

    themeBtn.addEventListener("click", function(){

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            themeBtn.textContent = "☀️ Light Mode";

        }else{

            themeBtn.textContent = "🌙 Dark Mode";

        }

    });

}