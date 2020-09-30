
let tittle = document.querySelector('.open-title');
let navbar = document.querySelector('.nav');
let formButton = document.querySelector('.form-button');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal-close');
let arrows = document.querySelector('.arrows');
let wrapper = document.querySelector('.wrapper');
let tooltip = document.querySelector('.tooltip');
let footer = document.querySelector('footer');

const headerChange = () => {
     tittle.classList.add('site-title');
     tittle.classList.remove('open-title');
     navbar.classList.add('nav-roll');
 };

formButton.addEventListener('click', () => {
    modalBg.classList.add('bg-active');
})

modalClose.addEventListener('click', () => {
    modalBg.classList.remove('bg-active');
})
arrows.addEventListener("mouseenter", () => {
    wrapper.scrollIntoView();
});

setTimeout(headerChange, 1500);