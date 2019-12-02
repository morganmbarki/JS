var swap = document.getElementById('image');
swap.addEventListener('mouseover',swapO);
swap.addEventListener('mouseout',swapT);
function swapO() {
  image.src = 'assets/img/enfant.png';
}
function swapT() {
  image.src = 'assets/img/enfant.jpg';
}
