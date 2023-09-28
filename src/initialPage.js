export function initialPage() {
    const element = document.createElement('div');
    const header = document.createElement('h1');

    header.textContent = "Welcome to The Boo";

    const p1 = document.createElement('h2');
    p1.innerHTML = `The <span id="emphasize">best</span> restaurant in town`;

    const p2 = document.createElement('h2');
    p2.innerHTML = `We offer the best <span id="emphasize">food</span> and <span id="emphasize">drinks</span> for your Halloween`;

    const p3 = document.createElement('h2');
    p3.innerHTML = `Everything is made <span id="emphasize">fresh</span>`;

    element.append(header, p1, p2, p3);
    return element;
};