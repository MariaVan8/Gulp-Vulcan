"use strict";

const body = document.body;
const bar = document.getElementById('bar');
const nav = document.getElementById('main-navigation');
const main = document.getElementById("main");
var navMenu = document.getElementById('navMenu');

navMenu.addEventListener("click", openMenu);
// Prevents the focus state from activating
navMenu.addEventListener("mousedown", function (e) {
    e.preventDefault();
});

function openMenu() {
    body.classList.toggle("show");
    body.classList.add("animating");
    navMenu.classList.toggle("activated");
    navMenu.classList.toggle("show");
}

const mql = window.matchMedia("(min-width: 560px)");

mql.addListener(removeTransition);

function removeTransition(e) {
    if (e.matches) {
        body.classList.remove("show", "animating");
        navMenu.classList.remove("activated", "show");
    }
}

body.addEventListener("transitionend", function () {
    if (!body.classList.contains("show")) {
        body.classList.remove("animating");
    }
});
