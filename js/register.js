let inputname = document.getElementById("inputName")
let inputlastname = document.getElementById("inputLastNames")
let inputemail = document.getElementById("inputEmail");
let inputcenter = document.getElementById("inputCenter");
let inputcourse = document.getElementById("inputCourse");
let inputpassword = document.getElementById("inputPassword");
let inputrepeatpassword = document.getElementById("inputRepeatPassword");
let registrarse = document.getElementById("registrarse");

const register = () => {

    if (inputpassword.value == inputrepeatpassword.value) {

        fetch("http://localhost:3000/sanitaria/tecnico/register"), {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({

                nombre_tecnico: inputname.value,
                apellidos_tecnico: inputlastname.value,
                curso_tecnico: inputcourse.value,
                centro_tecnico: inputcenter.value,
                email_tecnico: inputemail.value,
                password_tecnico: bcrypt.hashSync(inputpassword.value, 10)

            })
        }
            .then((resp) => {
                return resp.json()
            })
            .then((respJSON) => {

                console.log(respJSON);


            })


            .catch(error => console.log(error));

    }

}

registrarse.addEventListener("submit", register)

