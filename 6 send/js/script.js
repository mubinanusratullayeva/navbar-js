const open = document.querySelector('.navbar__open');
const navbarMenu = document.querySelector('.navbar__menu');
const close = document.querySelector('navbar__close');

open.addEventListener('click', function() {
    navbarMenu.classList.toggle('menuNavbar');
})