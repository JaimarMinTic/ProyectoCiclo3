const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});
function alerta(){
  alert("esta seguro que desea eliminar el comentario?");
}
function alerta2(){
  alert("esta seguro que desea eliminar la foto?");
}