function includeHTML () {
  let element = document.getElementsByTagName('import');

  for (let i = 0; i < element.length; i++) {
    let href = element[i].getAttribute('href');
    let parent = element[i].parentNode;
    let tagLocation;

    for (let j = 0; j < parent.childNodes.length; j++) {
      if (parent.childNodes[j] == element[i]) {
        tagLocation = parent.childNodes[j];
        break;
      }
    }

    if (href) {
      let xhr = new XMLHttpRequest;

      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            element[i].innerHTML = this.responseText;
            parent.insertBefore(element[i].firstChild, tagLocation);
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