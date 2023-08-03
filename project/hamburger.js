const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('.header__nav');
const menu = document.querySelector('.container__mobile_menu');
const logo = document.querySelector('.header__logo_mobile');
const header = document.querySelector('.container__header');
const watsapp = document.querySelector('.header__button_mobile');
const hamburger_container = document.querySelector('.hamburger__container');




hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    hamburger.classList.toggle('hamburger--active');
    hamburger_container.classList.toggle('hamburger__container--active');
    // nav.classList.toggle('header__nav--active');
    menu.classList.toggle('container__mobile_menu--active');
    logo.classList.toggle('header__logo_mobile--active');
    header.classList.toggle('container__header--active');
    watsapp.classList.toggle('header__button_mobile--active');


});
menu.addEventListener('click', (e) => {
    if (e.classList.contains('header__nav-link')) {
        hamburger.classList.remove('hamburger--active');
        hamburger_container.classList.toggle('hamburger__container--active');
        menu.classList.toggle('container__mobile_menu--active');
        logo.classList.toggle('header__logo_mobile--active');
        watsapp.classList.toggle('header__button_mobile--active');
        // nav.classList.remove('header__nav-active');
    }
});

const burgerClose = () => {
    if (hamburger.classList.contains('hamburger--active')) {
        hamburger.click()
    }
}
document.addEventListener('wheel', (e) => {
    burgerClose()
});
document.addEventListener('touchmove', (e) => {
    burgerClose()
});