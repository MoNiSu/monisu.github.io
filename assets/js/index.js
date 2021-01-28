const nav = document.querySelector('nav');
const navLayer = document.querySelector('.nav_layer');
const openNavButton = document.querySelector('.open_nav_button');

const PATH_SEPARATOR = '/';

const nowURI = window.location.pathname;

function checkLocation () {
  if (nowURI === '/') {
    return 'home';
  } else {
    let firstURI = nowURI.split(PATH_SEPARATOR)[1];

    switch (firstURI) {
      case 'posts':
        return 'post';
      default:
        return 'home';
    }
  }
}

function changeNavButtonColor () {
  let nowURIButton = document.querySelector(`.${checkLocation()}_button`);

  nowURIButton.classList.add('focused');
}

function isNavOpened() {
  if (nav.classList.contains('move_nav_left')) {
    return true;
  } else {
    return false;
  }
}

function openNav () {
  if (nav.classList.contains('move_nav_right')) {
    nav.classList.replace('move_nav_right', 'move_nav_left');
  } else {
    nav.classList.add('move_nav_left');
  }

  openNavButton.classList.add('focused');
  navLayer.classList.remove('hidden');
}

function closeNav () {
  nav.classList.replace('move_nav_left', 'move_nav_right');
  openNavButton.classList.remove('focused');
  navLayer.classList.add('hidden');
}

function changeNavStatus () {
  if (isNavOpened()) {
    closeNav();
  } else {
    openNav();
  }
}

function addEvents () {
  openNavButton.addEventListener('click', changeNavStatus);
}

changeNavButtonColor();
addEvents();

