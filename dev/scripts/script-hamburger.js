"use strict";

let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.header-nav');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('show');
});


