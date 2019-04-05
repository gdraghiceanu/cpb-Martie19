//call back
let l = console.log;
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let btn = document.getElementById('buton');
btn.addEventListener('click', () => l('Am apasat clik!'));