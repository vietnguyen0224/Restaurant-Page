import {initialPage as home} from './initialPage.js';
import menu from './menu.js';
import contact from './contact.js';
import './assets/styles/style.css';

let tabs = {home: ["Home", home()], menu: ["Menu", menu()], contact: ["Contact", contact()]};

const element = document.createElement('div');
function component() {
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'navBar');

    let navigation = Object.keys(tabs);
    navigation.forEach(key => {
        const tab = document.createElement('button');
        tab.textContent = tabs[key][0];
        tab.setAttribute('id', key);
        tab.addEventListener('click', () => populate(key));
        navBar.appendChild(tab);
    });

    element.append(navBar, home());
    
    return element;
}

function populate(key) {
    console.log(key);
    let child = element.lastElementChild;
    element.removeChild(child);
    element.append(tabs[key][1]);
}

document.body.appendChild(component());