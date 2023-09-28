export default function menu() {
    const element = document.createElement('div');
    const header = document.createElement('h1');
    const container = document.createElement('div');

    container.setAttribute('class', 'menu-container');
    header.textContent = "Menu";

    const dishes = document.createElement('div');
    dishes.setAttribute('class', 'dishes');
    
    let d1 = document.createElement('div');
    d1.setAttribute('class', 'dish');
    d1.textContent = "Starter";

    let d2 = document.createElement('div');
    d2.setAttribute('class', 'dish');
    d2.textContent = "Main dish";

    let d3 = document.createElement('div');
    d3.setAttribute('class', 'dish');
    d3.textContent = "Dessert";

    let d4 = document.createElement('div');
    d4.setAttribute('class', 'dish');
    d4.textContent = "Drinks";

    dishes.append(d1, d2, d3, d4);

    container.appendChild(dishes);

    element.append(header, container);
    return element;
};