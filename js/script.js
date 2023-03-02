const btnLogin = document.getElementById("btnLogin");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("btnClose");
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

btnLogin.addEventListener("click", () => {
    modal.classList.add("modal--show");
})

    //ESTE ES EL FETCH CON LA RUTA PARA EL TECNICO. SACA TODOS LOS TÉCNICOS.
const getAllTecnicos =()=>{
    fetch(`http://localhost:3000/sanitariabd/tecnico/login`)
    .then((resp) => {
        return resp.json()
    })
    .then((respJSON) => {

        console.log(respJSON);
        //   respJSON.map((elemento) => {
        //     cargarProductos(elemento);
        //     crearTarjetas(elemento);

    })


    .catch(error => console.log(error));
}















btnClose.addEventListener("click", (email, password) => {
    getAllTecnicos();
    modal.classList.remove("modal--show");
})


