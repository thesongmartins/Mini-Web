const menu = document.querySelector('menu');

const open = function () {
    menu.classList.remove('hidden');
    console.log('Button clicked')
}

const closeMenu = function () {
    menu.classList.add('hidden');
}
menu.addEventListener('click', open);
menu.addEventListener('click', closeMenu);