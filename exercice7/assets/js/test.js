// function control() {
//   var number1 = document.getElementById('number1').value;
//   if (number1 <= 18) {
//     alert(`T'es mineur dégage`);
//   } else {
//     alert(`Bonjour Monsieur`);
//   }
// }
var sendButtonVar = document.getElementById('sendB');
sendButtonVar.addEventListener('click', sendInfo);
function sendInfo() {
  var number1 = document.getElementById('number1').value;
  if (number1 <= 18)  {
    alert('Dégage t\'es mineur');
  } else {
    alert('Coucou');
  }
}
