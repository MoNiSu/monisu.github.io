// const menu = document.querySelector('.menu');
// const menuLayer = document.querySelector('.menu_layer');

function openMenu () {
  let menu = document.querySelector('.menu');
  let menuLayer = document.querySelector('.menu_layer');

  menu.style.transition = '0.3s';
  menu.style.transform = "translate(-350px, 0px)";
  menuLayer.classList.remove('hidden');
}

function closeMenu () {
  let menu = document.querySelector('.menu');
  let menuLayer = document.querySelector('.menu_layer');
  
  menu.style.transition = '0.3s';
  menu.style.transform = "translate(350px, 0px)";
  menuLayer.classList.add('hidden');
}