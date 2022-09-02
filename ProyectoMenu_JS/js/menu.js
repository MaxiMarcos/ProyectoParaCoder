let titulo = document.querySelector("h1");
titulo.style.color = "blue";

let dias5 = document.getElementById("selectMenu");
dias5.style.width = "150px";
dias5.style.border = "2px solid red";



function seleccionMenu() {
    let elegirDia = document.getElementById("selectMenu");
    let resultado = elegirDia.value;

    document.getElementById("rta").innerText = `Usted ha elegido la siguiente opción: ${resultado}.`;
    resultado.style = "2px solid green";
}



const formulario = document.getElementById("formulario");
const boton = document.getElementById("submit");








console.log(seleccionMenu())




