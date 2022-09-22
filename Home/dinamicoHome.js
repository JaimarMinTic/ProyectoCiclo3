document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("userLogin").addEventListener("submit", listener);})

  let listener = (evento)=>{
    let validacion = validar_formulario();
    if (validacion == false){
      evento.preventDefault();
    }
  }


  function validar_formulario() {
    // evento.preventDefault();
    let nombreDeUsuario = document.formHome.UserName;
    let contraseñaDeUsuario = document.formHome.Password;

    let nombreDeUsuario_len = nombreDeUsuario.value.length;
    if(nombreDeUsuario_len < 4){
          alert("Se debe Ingresar un usuario de al menos 4 caracteres");
          document.formHome.UserName.focus();
          // passid.focus();
          return false;
          }  

  let contraseñaDeUsuario_len = contraseñaDeUsuario.value.length;
    if(contraseñaDeUsuario_len < 6){
            alert("Se debe Ingresar una contraseña de al menos 6 caracteres");
            document.formHome.Password.focus();
            // contraseñaDeUsuario.focus();
            return false;
            }  

          }


 const openModal = document.getElementById("modalButton");
 const ModalContainer = document.getElementById("modalContainer");
 const Close = document.getElementById("signUpCerrar");

 openModal.addEventListener('click', () => {
    ModalContainer.classList.add('show');
 });

 Close.addEventListener('click', () => {
    ModalContainer.classList.remove("show");
 });


 document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("registro").addEventListener("submit", validar_registro);})

  function validar_resgitro(evento) {
    evento.preventDefault();
    let emailUser = document.formRegistro.correoElectronico;
    let Nameid = document.getElementById(signUpName);
    let UserName = document.formRegistro.nombreUsuario;
    let Passw = document.getElementById(singUpPassword);

    let formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!emailUser.value.match(formato_email)) {
    alert("Debes ingresar un email electronico valido!");
    emailUser.focus();
    return false; //Para la parte dos, que los datos se conserven
  }
    let Nameid_len = Nameid.value.length;
      if(Nameid_len < 4){
            alert("Se debe Ingresar un nombre de al menos 4 caracteres");
            document.formRegistro.nombreCompleto.focus();
            passid.focus();
            return false;
          }
    let UserName_len = UserName.value.length;
      if(UserName_len < 4){
            alert("Se debe Ingresar un usuario de al menos 4 caracteres");
            document.formRegistro.nombreUsuario.focus();
            passid.focus();
            return false;
            }  

    let Passw_len = Passw.value.length;
      if(Passw_len < 6){
              alert("Se debe Ingresar una contraseña de al menos 6 caracteres");
              document.formRegistro.nombreUsuario.focus();
              Passw.focus();
              return false;
              }  
      
  }

  let userEjemplo = document.getElementById("UserName").value;
  let cajadestino = document.getElementById("inputEjemplo").value;
  let Butttonejemplo = document.getElementById("buttonEjemplo");

  

 
  function mostrar (valor) {
    document.getElementById("resultado").innerHTML= valor;
  } 

  Butttonejemplo.onclick = mostrar;

  document.getElementById("inputEjemplo").value = document.getElementById("UserName");



  



