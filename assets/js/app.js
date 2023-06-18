const currentUrl = window.location.pathname;
const indexUrl = currentUrl.indexOf('.');
const pathname = currentUrl.slice(1, indexUrl);

const activeElems = document.querySelectorAll('[data-active]');
const navElem = document.querySelector(`[data-element="${pathname}"]`);

if (navElem) {
  const nameHeader = navElem.dataset.header;
  const elemHeader = document.querySelector(`[data-active="${nameHeader}"]`);

  elemHeader.classList.add('active');
}

activeElems.forEach(activeElem => {
  const nameElem = activeElem.dataset.active;

  if (pathname === nameElem) {
    activeElem.classList.add('active');
  }
});



window.addEventListener(`load`, event => {
  const documentWidth = document.documentElement.offsetWidth;

  if (documentWidth < 1050) {
    alert('Ваше устройство не поддерживается! Перейдите на ПК версию');
  }
});

window.addEventListener(`resize`, event => {
  const documentWidth = document.documentElement.offsetWidth;

  if (documentWidth < 1050) {
    alert('Ваше устройство не поддерживается! Перейдите на ПК версию');
  }
});