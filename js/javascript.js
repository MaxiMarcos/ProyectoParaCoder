
// array

const dias = ["lunes", "martes", "miercoles", "jueves","viernes"];

const pedidos = [];

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

    if (pregunta == dias[0]) {
        pedidos.push(pregunta)

    } else if (pregunta == dias[1]) {
        pedidos.push(pregunta)

    } else if (pregunta == dias[2]) {
        pedidos.push(pregunta)

    }
    else if (pregunta == dias[3]) {
        pedidos.push(pregunta)

    }
    else if (pregunta == dias[4]) {
        pedidos.push(pregunta)

    }
    else if (pregunta == "F") {
        pedidos.pop(pregunta);
    }
    else if (pregunta == "ESC") {
        break;
    }else {
        alert("texto ingresado inválido");
        break;
    }

    console.log(nombre + " encargó menú para el día: " + pregunta.toUpperCase() + "\nPrecio total: " + precio);
    pregunta = prompt("Costo hasta el momento: " + precio + "$" + "\nPor favor vuelva a reservar otro menú o presione ESC.\n Para cancelar el último pedido presione F ");

}
console.log("Lunes: " + pedidos.includes ("lunes"));
console.log("Martes: " + pedidos.includes ("martes"));
console.log("Miercoles: " + pedidos.includes ("miercoles",));
console.log("Jueves: " + pedidos.includes ("jueves"));
console.log("Viernes: " + pedidos.includes ("viernes"));
}

// función invocada

menu();