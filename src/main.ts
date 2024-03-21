import appHtml from './app.html?raw';
import './js/app.js';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = appHtml;