const btnLogin = document.getElementById("btnLogin");

const modal = document.getElementById("modal");

const btnClose = document.getElementById("btnClose");

btnLogin.addEventListener("click", ()=>{
    modal.classList.add("modal--show");
})

btnClose.addEventListener("click", ()=>{
    modal.classList.remove("modal--show");
})


