const list = document.querySelector('.list');
const layer = document.querySelector('.layer');

function makeListVisible () {
  list.style.transition = '0.3s';
  list.style.transform = "translate(-350px, 0px)";
  layer.classList.remove('hidden');
}

function makeListInvisible () {
  list.style.transition = '0.3s';
  list.style.transform = "translate(350px, 0px)";
  layer.classList.add('hidden');
}