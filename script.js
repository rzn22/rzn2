
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('#menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


let troca = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");

    slides.forEach(slide => slide.style.display = "none");

    troca++;
   
    if (troca > slides.length) {
        troca = 1;
    }

    slides[troca - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}

showSlides();










