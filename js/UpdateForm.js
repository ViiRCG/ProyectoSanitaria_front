let inputUpdateName = document.getElementById("inputUpdateName")
let inputUpdateApellidos = document.getElementById("inputUpdateApellidos")
let inputUpdateEmail = document.getElementById("inputUpdateEmail")
let inputUpdateCentro = document.getElementById("inputUpdateCentro")
let inputUpdateCurso = document.getElementById("inputUpdateCurso")


let usuario;
const cargainicial=()=>{
    cargaSesion();
}

const modificar = () => {
    fetch("http://localhost:3000/sanitaria/tecnico/modify", {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({

            nombre_tecnico: inputUpdateName.value,
            apellidos_tecnico: inputUpdateApellidos.value,
            curso_tecnico: inputUpdateEmail.value,
            centro_tecnico: inputUpdateCentro.value,
            email_tecnico: inputUpdateCurso.value,
            

        })
    })
        .then((resp) => {
            return resp.json()
        })
        .then((respJSON) => {

            console.log(respJSON);
            //   respJSON.map((elemento) => {

            // 	if (elemento.email && elemento.password) {

        })


        .catch(error => console.log(error));
}

const cargaSesion=()=>{
    usuario = JSON.parse(sessionStorage.getItem("tecnico-token"));
    console.log(usuario)
    let datos = getDatos();
}

const getDatos=()=>{
    fetch("http://localhost:3000/sanitaria/tecnico/"+usuario.email, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
        // body: JSON.stringify({

        //     nombre_tecnico: inputUpdateName.value,
        //     apellidos_tecnico: inputUpdateApellidos.value,
        //     curso_tecnico: inputUpdateEmail.value,
        //     centro_tecnico: inputUpdateCentro.value,
        //     email_tecnico: inputUpdateCurso.value,
            

        // })
    })
        .then((resp) => {
            return resp.json()
        })
        .then((respJSON) => {

            console.log(respJSON);
            //   respJSON.map((elemento) => {

            // 	if (elemento.email && elemento.password) {

        })


        .catch(error => console.log(error));

}



document.addEventListener("DOMContentLoaded", cargainicial);