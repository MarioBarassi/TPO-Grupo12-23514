const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.classList.add("invisible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    abrir.classList.remove("invisible");
})
