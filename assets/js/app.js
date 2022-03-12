// page home
// get heading, content

import { chooseRule, home } from "./view.js";

const heading = document.querySelector('.header .heading');
const content = document.querySelector('.content');

heading.innerHTML = home.heading;
// content.innerHTML = home.content;
// get btn choose
const btnChoose = document.querySelector('.content #btn-choose');
console.log(btnChoose);

btnChoose.addEventListener('click', () => {
    heading.innerHTML = chooseRule.heading;
    content.innerHTML = chooseRule.content;
})

