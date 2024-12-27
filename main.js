let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    console.log("Slides:", slides);

    // Ensure there are slides to work with
    if (slides.length === 0) {
        console.error("No slides found. Check your HTML structure.");
        return;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Add safety check for slides array
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }

    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }

    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('navigateButton').addEventListener('click', function () {
        window.location.href = 'description.html';
    });
});
