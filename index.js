document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    let currentSlideIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll(".slide");
        if (slides.length === 0) return;

        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }

        slides.forEach(slide => (slide.style.display = "none"));
        slides[currentSlideIndex].style.display = "block";
    }

    function changeSlide(step) {
        showSlide(currentSlideIndex + step);
    }

    showSlide(currentSlideIndex);

    setInterval(() => {
        changeSlide(1);
    }, 5000);

    const bars = document.querySelectorAll(".technical-bars .bar .progress span");
    bars.forEach(bar => {
        bar.style.animation = "fillBar 2s ease-in-out forwards";
    });
});