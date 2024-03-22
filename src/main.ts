import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import appHtml from './app.html?raw';
import './js/app.js';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = appHtml;