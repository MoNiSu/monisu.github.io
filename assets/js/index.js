const menuItemLinks = document.getElementsByClassName('menu_item_link');

const PATH_SEPARATOR = '/';

function scrollToTop (nowScrollTop, scrollAmount) {
  if (!nowScrollTop) {
    nowScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  }

  if (!scrollAmount) {
    scrollAmount = 10;
  }
  
  setTimeout(function () {
    if (nowScrollTop >= scrollAmount) {
      document.body.scrollTop -= scrollAmount;
      document.documentElement.scrollTop -= scrollAmount;

      let remainScrollTop = nowScrollTop - scrollAmount;

      if (remainScrollTop !== 0) {
        scrollAmount += 10;
        scrollToTop(remainScrollTop, scrollAmount);
      }
    } else {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      return;
    }
  }, 10);
}

function checkCurrentLocation() {
  let currentURL = window.location.pathname;

  if (currentURL === '/') {
    return 'home';
  } else {
    let currentURL1 = currentURL.split(PATH_SEPARATOR)[1];

    switch (currentURL1) {
      case 'posts':
        return 'post';
      case 'about':
        return 'about';
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