function includeHTML () {
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
          includeHTML();
        }
      }

      xhr.open('GET', href, true);
      xhr.send();

      return;
    }
  }
}

includeHTML();