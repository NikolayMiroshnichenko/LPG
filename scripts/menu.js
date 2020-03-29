const openMenuBtn = document.querySelector('.js-menu-icon');
const menu = document.querySelector('.js-nav');

openMenuBtn.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu)

function openMenu(e) {
    menu.classList.add('show-menu');
} 

function closeMenu(e) {
    if(e.target.nodeName != 'A' && e.target.nodeName != 'SPAN') return;

    menu.classList.remove('show-menu');
}