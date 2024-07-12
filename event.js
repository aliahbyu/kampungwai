// JavaScript for carousel functionality
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let counter = 0;
const size = images[0].clientWidth;

carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    carouselImages.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselImages.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselImages.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        carouselImages.style.transition = "none";
        counter = images.length - 2;
        carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (images[counter].id === 'firstClone') {
        carouselImages.style.transition = "none";
        counter = images.length - counter;
        carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// Automatic carousel swiping
const autoSwipeInterval = setInterval(() => {
    if (counter >= images.length - 1) {
        counter = 0; // Reset to first image
    } else {
        counter++;
    }
    carouselImages.style.transition = "transform 0.5s ease-in-out";
    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 3000); // Change image every 3 seconds

// Pause auto-swiping on hover
carouselImages.addEventListener('mouseover', () => {
    clearInterval(autoSwipeInterval);
});

carouselImages.addEventListener('mouseout', () => {
    setInterval(() => {
        if (counter >= images.length - 1) {
            counter = 0; // Reset to first image
        } else {
            counter++;
        }
        carouselImages.style.transition = "transform 0.5s ease-in-out";
        carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }, 3000);
});

// Function to scroll to content section smoothly
function scrollToContent() {
    const contentSection = document.getElementById('content-section');
    contentSection.scrollIntoView({ behavior: 'smooth' });
}




