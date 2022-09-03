let titulo = document.querySelector("h1");
titulo.style.color = "blue";


let boton = document.getElementById("submit2");
boton.addEventListener("click", entry)

function entry() {
    console.log("Respuesta");
}


function seleccionMenu() {
    let elegirDia = document.getElementById("selectMenu");
    let resultado = elegirDia.value;

    entry();
    document.getElementById("rta").innerText = `Usted ha elegido la siguiente opción: ${resultado}.`;
}

function enviar(event) {

    if (resultado(!option[0])) {

        alert("Gracias " + usuario);
        console.log(usuario + "reservó " + resultado);
        event.preventDefault();

    } else {
        alert('Por favor vuelva a intentarlo');
        event.preventDefault();
    }
}


seleccionMenu();






