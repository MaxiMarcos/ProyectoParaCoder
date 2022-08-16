
// array

const Dias = ["lunes", "martes", "miercoles", "jueves","viernes" ];

const Pedidos = [];

// otras variables

let precio = 0;
let compra = 200;

// función declarada

function menu () {


// ciclo while

let nombre = prompt("Como es su nombre?");
let pregunta = prompt("Hola " + nombre + "! " + "Ingrese en minúscula los días que desee \ncomprar menú (200$ c/u) esta semana");

while (pregunta) {

    precio = precio + compra;

    if (pregunta == Dias[0]) {
        Pedidos.push(pregunta)

    } else if (pregunta == Dias[1]) {
        Pedidos.push(pregunta)

    } else if (pregunta == Dias[2]) {
        Pedidos.push(pregunta)

    }
    else if (pregunta == Dias[3]) {
        Pedidos.push(pregunta)

    }
    else if (pregunta == Dias[4]) {
        Pedidos.push(pregunta)

    }
    else if (pregunta == "ESC") {
        break;
    }else {
        alert("texto ingresado inválido");
        break;
    }

    console.log(nombre + " encargó menú para el día: " + pregunta.toUpperCase() + "\nPrecio total: " + precio);
    pregunta = prompt("Costo hasta el momento: " + precio + "$" + "\nPor favor vuelva a reservar otro menú o presione ESC");

}

}

// función invocada

menu();