"use strict";

let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.header-nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('show');
});

const mql = window.matchMedia("(min-width: 560px)");

mql.addListener(removeTransition);

function removeTransition(e) {
    if (e.matches) {
        hamburger.classList.remove("active");
        nav.classList.remove("show");
    }
}
