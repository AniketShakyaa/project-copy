// =======================
// MOBILE MENU
// =======================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// =======================
// COUNTER ANIMATION
// =======================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }
    };

    updateCounter();

});

// =======================
// SCROLL REVEAL EFFECT
// =======================

const reveals = document.querySelectorAll(
    ".about-box, .course-card, .achievement-card, .student-card, .testimonial-card, .info-card"
);

window.addEventListener("scroll", revealElements);

function revealElements(){

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const position =
            item.getBoundingClientRect().top;

        if(position < windowHeight - 100){

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }
    });

}

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all .6s ease";

});

revealElements();

// =======================
// ACTIVE NAVIGATION
// =======================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            .includes(current)
        ){
            link.classList.add("active");
        }

    });

});


window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("inquiryModal").style.display = "block";
    }, 2000);
});

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("inquiryModal").style.display = "none";
});



document.getElementById("popupForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const formData = new FormData();

    formData.append(
        "entry.1930264378",
        document.getElementById("name").value
    );  

    formData.append(
        "entry.1342131866",
        document.getElementById("mobile").value
    );

    formData.append(
        "entry.1587194451",
        document.getElementById("email").value
    );

    fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfPOLJgwVWrQCoOQXEhqS7oMWPPiOTIPFXVZMyZGKj9RI7Xtw/formResponse",
        {
            method: "POST",
            mode: "no-cors",
            body: formData
        }
    );

    alert("Thank You! Your details have been submitted successfully.");

    document.getElementById("popupForm").reset();
});