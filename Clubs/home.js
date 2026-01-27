document.addEventListener('DOMContentLoaded', function () {
        const SLIDE_INTERVAL = 3000; 
        const slideshow = document.querySelector('.slideshow');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
                if (!slideshow) return; 

        const slides = slideshow.querySelectorAll('.slide');
        let currentIndex = 0;
        const slideCount = slides.length;
        let slideTimer;

        const showSlide = (index) => {
            slideshow.style.transform = `translateX(-${index * 100}%)`;
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slideCount;
            showSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            showSlide(currentIndex);
        };

        const startAutoplay = () => {
            if (slideCount > 1) {
                slideTimer = setInterval(nextSlide, SLIDE_INTERVAL);
            }
        };

        const stopAutoplay = () => {
            clearInterval(slideTimer);
        };

        nextBtn.addEventListener('click', () => {
            stopAutoplay();
            nextSlide();
            startAutoplay();
        });

        prevBtn.addEventListener('click', () => {
            stopAutoplay();
            prevSlide();
            startAutoplay();
        });
        
        startAutoplay();
    });