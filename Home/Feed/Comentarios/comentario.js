
const params = new URLSearchParams(document.location.search);

const urlImg = params.get("img");

// let ejemplo = `<img src=../${urlImg} width="60%">`

let ejm = document.createElement('img');

ejm.src = "../" + urlImg;

ejm.className = "fotoComentarios"

let body = document.body;

body.insertBefore(ejm, body.firstChild) ;

console.log(urlImg);

let Eliminarbtn = document.getElementById("btnEliminar");

let Editarbtn = document.getElementById("btnEditar")

let Editar = document.getElementById("btnEditar");

let comment = document.getElementById("comentario1");

let editcomment = document.getElementById("com1");

let eliminarFunction = () => {
    // comment.innerHTML = "";
    alert("deseas borrar el comentario?")
    comment.remove();

}

let editarFunction = () => {
    alert("deseas editar el comentario?") 
    editcomment.innerHTML = "comentario editado";
}

Eliminarbtn.onclick=eliminarFunction;
Editarbtn.onclick=editarFunction;
