import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import appHtml from './app.html?raw';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = appHtml;

window.addEventListener('DOMContentLoaded', event => {
  // Collapse responsive navbar when toggler is visible
  let navbarToggler: any = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem: any) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});