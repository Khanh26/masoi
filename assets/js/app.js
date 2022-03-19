// page home
// get heading, content

import view from "./view.js";
import characters from "./data.js";

const heading = document.querySelector('.header .heading');
const content = document.querySelector('.content');
const playGame = {
    rules: [],

    isSameObject: function(obj,array) {
        return array.some( (element) => {
            return JSON.stringify(element) == JSON.stringify(obj);
        })
    },    
    filterBySide: function(side) {
        let array = [];
        for(let i = 0; i < this.rules.length; i++) {
            if(this.rules[i].rule.side == side && !this.isSameObject(this.rules[i], array)) {
                array.push(this.rules[i]);
            }
        }
        return array;
    },

    getCurrentRules: function() {
        let array = [];
        for(let i = 0; i < this.rules.length; i++) {
            if(this.isSameObject(this.rules[i], array) == undefined) {
                array.push(this.rules[i].rule);
            }
        }
        return array;
    },

    countCharacter: function(character) {
        let count = 0;
        this.rules.forEach( (rule) => {
            if(rule.rule.nameVI == character) {
                count++;
            }
        });
        return count;
    },

    countSide: function() {
        let countHuman = 0;
        let countWolf = 0;
        this.rules.forEach( (rule) => {
            rule.rule.side == 'human' ? countHuman++ : countWolf;
        });
        return { countHuman: countHuman, countWolf: countWolf };
    }
};


function addEventBtn(btnS, icon, newAction, oldAction, block) {
    document.querySelectorAll(btnS).forEach( (btn) => {
        btn.addEventListener('click', () => {
            let itemSelected = btn.parentElement.parentElement;
            itemSelected.querySelector('.btn-rule').innerHTML = icon;
            itemSelected.querySelector('.btn-rule').classList.remove(oldAction);
            itemSelected.querySelector('.btn-rule').classList.add(newAction);
            document.querySelector(block).appendChild(itemSelected);
            if(btnS == '.btn-selected') {
                addEventBtn('.btn-remove', '<i class="fa-solid fa-plus"></i>', 'btn-selected', 'btn-remove', '#list-select');
            } else {
                addEventBtn('.btn-selected', '<i class="fa-solid fa-xmark"></i>', 'btn-remove', 'btn-selected', '#list-selected');
            }
        })
    })
}
function initGame() {
    playGame.rules.length = 0;
    let listRule = document.querySelectorAll('#list-selected .item-rule');
    listRule.forEach( (rule) => {
        if(rule.querySelector('.inputCount')) {
            for (let index = 0; index < rule.querySelector('.inputCount').value; index++) {
                playGame.rules.push( {
                    name: '',
                    status: '',
                    rule: characters.findByNameVI(rule.querySelector('.name-rule').textContent),
                })
            }
        } else {
            playGame.rules.push( {
                name: '',
                status: '',
                rule: characters.findByNameVI(rule.querySelector('.name-rule').textContent),
            })
        }
    })
}

function render(htmlHeading, htmlContent) {
    heading.innerHTML = htmlHeading;
    content.innerHTML = htmlContent;
}

function viewReview() {
    initGame();
    render(view.reviewSelected.heading,view.reviewSelected.content(playGame));
    document.querySelector('#btnBack').addEventListener('click', viewSelect);
}
    
function viewHome() {
    render(view.home.heading,view.home.content);
    document.querySelector('.content #btn-choose').addEventListener('click', viewSelect);
}

function viewSelect() {

    

    render(view.selectRule.heading,view.selectRule.content(rest ,playGame.getCurrentRules));
    addEventBtn('.btn-selected', '<i class="fa-solid fa-xmark"></i>', 'btn-remove', 'btn-selected', '#list-selected');

    document.querySelectorAll('.btnUp').forEach( (element) => {
        element.addEventListener('click', (e) => {
            ++e.target.parentElement.parentElement.querySelector('.inputCount').value
        })
    } )

    document.querySelectorAll('.btnDown').forEach( (element) => {
        element.addEventListener('click', (e) => {
            if(e.target.parentElement.parentElement.querySelector('.inputCount').value > 1)
                --e.target.parentElement.parentElement.querySelector('.inputCount').value
        })
    } )
    document.querySelector('#btnBack').addEventListener('click', viewHome);
    document.querySelector('#btnSubmit').addEventListener('click', viewReview);

}

viewHome();