// page home
// get heading, content

import { chooseRule, home } from "./view.js";

const heading = document.querySelector('.header .heading');
const content = document.querySelector('.content');

function viewHome() {
    heading.innerHTML = home.heading;
    content.innerHTML = home.content;
    document.querySelector('.content #btn-choose').addEventListener('click', viewChoose);
}

function viewChoose() {
    heading.innerHTML = chooseRule.heading;
    content.innerHTML = chooseRule.content;
    document.querySelector('#btnBack').addEventListener('click', viewHome);
}

viewHome();

