// const { list } = require("postcss");

let nav = document.querySelector('.nav');
let btn = document.querySelector('.toggle');
let icon = btn.querySelector('.icon');
console.log(btn, nav, icon);
btn.addEventListener('click', () => {
    // if (icon.classList.contains('fa')) {
    //     nav.classList.remove('hidden');
    //     icon.classList.replace('fa-bars', 'fa-times');
    // } else {
    //     icon.classList.replace('fa-times', 'fa-bars');
    //     nav.classList.add('hidden');
    // }
    nav.classList.toggle('hidden');
    // icon.classList.replace('fa-bars', 'fa-times');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
})