const btnLogin = document.getElementById("btnLogin");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("btnClose");
const email = document.getElementById("email");
const password = document.getElementById("password");

let token;


const login = () => {
    

    fetch("http://localhost:3000/sanitaria/tecnico/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email_tecnico: email.value,
            password_tecnico: password.value,

        })
    })
        .then((resp) => {
            return resp.json()
        })
        .then((respJSON) => {
            
            console.log(respJSON);
            token=respJSON.success;
            //   respJSON.map((elemento) => {

            // 	if (elemento.email && elemento.password) {

})

        .catch(error => console.log(error));
}

//REGISTRO
const register = () => {
    fetch("http://localhost:3000/sanitaria/tecnico/register"), {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({

            // nombre_tecnico: newTecnico.nombre_tecnico,
            // apellidos_tecnico: newTecnico.apellidos_tecnico,
            // curso_tecnico: newTecnico.curso_tecnico,
            // centro_tecnico: newTecnico.centro_tecnico,
            // email_tecnico: newTecnico.email_tecnico,
            // password_tecnico: bcrypt.hashSync(newTecnico.password_tecnico, 10)

        })
    }
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

//MODIFICAR DATOS

const modificar = () => {
    fetch("http://localhost:3000/sanitaria/tecnico/modify"), {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({

            // nombre_tecnico: newTecnico.nombre_tecnico,
            // apellidos_tecnico: newTecnico.apellidos_tecnico,
            // curso_tecnico: newTecnico.curso_tecnico,
            // centro_tecnico: newTecnico.centro_tecnico,
            // email_tecnico: newTecnico.email_tecnico,
            // password_tecnico: bcrypt.hashSync(newTecnico.password_tecnico, 10)

        })
    }
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





// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//         title: "Probando",
//         body: "Probando",
//         useid: 1,
//     }
//     )
// })
//     .then((resp) => {
//         console.log(resp);
//         return resp.json()
//     }
//     )

//     .then((respJSON) => {
//         console.log("insercción realizada correctamente");
//         console.log(respJSON);
//         console.log("--------------------------------");
//     })
//     .catch(error => console.log(error));











btnLogin.addEventListener("click", () => {
    modal.classList.add("modal--show");
})



btnClose.addEventListener("click", (email, password) => {
    login();
    // modal.classList.remove("modal--show");
})


