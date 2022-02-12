const contactForm = document.getElementsByClassName("contact-me_form");
const userName = document.getElementById("name");
const userEmail = document.getElementsById("email");
const userMessage = document.getElementById("message");

contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event);
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carrousel-image");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); 
}