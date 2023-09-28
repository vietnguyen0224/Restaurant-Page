
export default function menu() {
    const element = document.createElement('div');
    const header = document.createElement('h1');

    header.textContent = "Contact";

    const p1 = document.createElement('h2');
    p1.innerHTML = `Find us in <span id="emphasize">hell</span>`;

    element.append(header, p1);
    return element;
};