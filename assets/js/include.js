const INDEX_JS_PATH = '/assets/js/index.js';

function loadScript (path) {
  let newScript = document.createElement('script');

  newScript.setAttribute('src', path);
  document.body.appendChild(newScript);

  return;
}

function include () {
  let element = document.getElementsByTagName('include');

  for (let i = 0; i < element.length; i++) {
    let href = element[i].getAttribute('href');

    if (href) {
      let xhr = new XMLHttpRequest;

      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            element[i].insertAdjacentHTML('afterend', this.responseText);
          } else if (this.status === 404) {
            console.log(`${href} is Not Found.`);
          }

          element[i].remove();
          include();
        }
      }

      xhr.open('GET', href, true);
      xhr.send();

      return;
    }
  }

  loadScript(INDEX_JS_PATH);

  return;
}

window.onload = function () {
  include();

  return;
}
