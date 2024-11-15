const { list } = require("postcss");

let nav = document.querySelector('.nav');
let btn = document.querySelector('.toggle');
let icon = btn.querySelector('.fa-bars');

btn.addEventListener('click', () => {
    if (icon.classList.contains('fa')) {
        nav.classList.remove('hidden');
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
        nav.classList.add('hidden');
    }
})