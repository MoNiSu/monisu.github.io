// const nav = document.querySelector('nav');
// const navLayer = document.querySelector('.nav_layer');

function openNav (nav, navLayer) {
  nav.style.transition = '0.3s';
  nav.style.transform = `translate( ${nav.offsetWidth * -1}px, 0px )`;
  navLayer.classList.remove('hidden');
}

function closeNav (nav, navLayer) {
  nav.style.transition = '0.3s';
  nav.style.transform = `translate( ${nav.offsetWidth}px, 0px )`;
  navLayer.classList.add('hidden');
}

function changeNavStatus () {
  let nav = document.querySelector('nav');
  let navLayer = document.querySelector('.nav_layer');

  if (navLayer.classList.contains('hidden')) {
    openNav(nav, navLayer);
  } else {
    closeNav(nav, navLayer);
  }
}