const { list } = require("postcss");

function menu(e) {
    let list = documet.querySelector('ul');

    e.class === "fa-bars" ? (e.class = " fa-xmark", list.classlist.add("hidden"), list.classlist.add('text-center')) : (e.class = "fa-bars", list.classlist.remove('flex-col'), list.classlist.remove());
}