const slideLeftButton = document.querySelector('.slide-left');
const slideRightButton = document.querySelector('.slide-right');
const trainerSlider = document.querySelector('.trainer-slider');

let scrollAmount = 0;

slideRightButton.addEventListener('click', () => {
    trainerSlider.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth'
    });
});

slideLeftButton.addEventListener('click', () => {
    trainerSlider.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth'
    });
});
