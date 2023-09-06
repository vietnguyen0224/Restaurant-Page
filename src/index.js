import initialPage from './initialPage.js';

function component() {
    const element = document.createElement('div');

    element.textContent = "Viet";
    
    return element;
}

document.body.appendChild(component());