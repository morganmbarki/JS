//récupération de l'image se trouvant dans le html*
var image = document.getElementById('myImage');
// ajout d'un évenement "au click" sur mon image et appel de la fonction "size"
image.addEventListener('click',size);
// déclaration de la fonction "size"
function size() {
  //style.width permet de modifier la taille d'une image
    image.style.width = '400px';
}



// var image = document.getElementById('myImage');
// image.addEventListener('click',size);
// var numb = 'a'
// function size() {
  // if(numb == 'a'){
  //   numb = 'b';
    // image.style.width = '400px';
  // }else{
  //   numb = 'a';
  //   images.style.width = '250px';
  // }
// }
