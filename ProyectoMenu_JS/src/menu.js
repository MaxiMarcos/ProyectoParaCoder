let titulo = document.querySelector("h1");
titulo.style.color = "blue";

let miSelector = document.querySelector("#selectMenu");


const pedidos = [];
let menusReservados = 1;




let boton = document.getElementById("submit2");
boton.addEventListener("click", entry)

function entry(ev) {

    const selector=document.getElementById("selectMenu")
    const seleccionado= selector.options[selector.selectedIndex].text

    miSelector.style.border = "4px solid green";

    if (seleccionado == "seleccionar") {
        ev.preventDefault() 
        miSelector.style.border = "3px solid red";
        alert('Por favor vuelva a intentarlo');
    } else {
        ev.preventDefault() 
        pedidos.push(seleccionado);
        console.log(menusReservados++);
        console.log(pedidos);

        const elJSON = JSON.stringify(pedidos);

        localStorage.setItem('listadoMenus', elJSON);
    }

}










