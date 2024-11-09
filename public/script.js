const { list } = require("postcss");

function toggleMenu() {
    const menuItems = document.getElementById('menu-items');
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');

    menuItems.classList.toggle('hidden');
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
}

// Add event listener to the menu toggle button
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);