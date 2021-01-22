const menu = document.querySelector('.menu');
const menuLayer = document.querySelector('.menu_layer');

function openMenu () {
  menu.style.transition = '0.3s';
  menu.style.transform = "translate(-350px, 0px)";
  menuLayer.classList.remove('hidden');
}

function closeMenu () {
  menu.style.transition = '0.3s';
  menu.style.transform = "translate(350px, 0px)";
  menuLayer.classList.add('hidden');
}