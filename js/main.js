
let tittle = document.querySelector('.open-title');
let navbar = document.querySelector('.nav');
let arrows = document.querySelector('.arrows');
let wrapper = document.querySelector('.wrapper');

const headerChange = () => {
     tittle.classList.add('site-title');
     tittle.classList.remove('open-title');
     navbar.classList.add('nav-roll');
 };

arrows.addEventListener("mouseenter", () => {
    wrapper.scrollIntoView();
});

setTimeout(headerChange, 1500);