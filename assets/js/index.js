const menuItemLinks = document.getElementsByClassName('menu_item_link');

const PATH_SEPARATOR = '/';

function goToTop () {
  let nowScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  
  for (i = nowScrollTop; i >= 0; i--) {
    setTimeout(function () {
    document.body.scrollTop = i;
    document.documentElement.scrollTop = i;
    }, 10);
  }
}

function checkCurrentLocation() {
  let currentURL = window.location.pathname;

  if (currentURL === '/') {
    return 'home';
  } else {
    let currentURL = currentURL.split(PATH_SEPARATOR)[1];

    switch (currentURL) {
      case 'posts':
        return 'post';
      default:
        return false;
    }
  }
}

function showCurrentLocation () {
  let currentLocation = checkCurrentLocation();
  let menuItemLinksLength = menuItemLinks.length;
  if (currentLocation) {
    for (i = 0; menuItemLinksLength > i; i++) {
      if (menuItemLinks[i].innerHTML.toLowerCase() === currentLocation) {
        menuItemLinks[i].classList.add('current_location');
        break;
      }
    }
  }
}

function initialExecution () {
  showCurrentLocation();
}

initialExecution();