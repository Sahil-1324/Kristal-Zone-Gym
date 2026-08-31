```js
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Header background on scroll
const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(0,0,0,0.95)";
            header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
        } else {
            header.style.background = "rgba(0,0,0,0.75)";
            header.style.boxShadow = "none";
        }
    });
}


// Hero button animation
const heroBtn = document.querySelector(".hero-btn");

if (heroBtn) {
    heroBtn.addEventListener("mouseenter", () => {
        heroBtn.style.transform = "scale(1.08)";
    });

    heroBtn.addEventListener("mouseleave", () => {
        heroBtn.style.transform = "scale(1)";
    });
}

console.log("Kristal Zone Gym Website Loaded Successfully!");


// BMI Calculator
function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("result");

    if (height === "" || weight === "") {
        result.innerHTML = "Please enter height and weight";
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal Weight";
    }
    else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }

    result.innerHTML =
        "Your BMI is " + bmi + " (" + category + ")";
}


// Animated Counter
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// FAQ Toggle
const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;

        } else {

            document.querySelectorAll(".faq-answer").forEach(item => {
                item.style.maxHeight = null;
            });

            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});


// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.pageYOffset > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });

    }

});
```
