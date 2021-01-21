const list = document.querySelector('.list');

function makeListVisible () {
  list.style.transition = '0.3s';
  list.style.transform = "translate(-350px, 0px)";
}

function makeListInvisible () {
  list.style.transition = '0.3s';
  list.style.transform = "translate(350px, 0px)";
}