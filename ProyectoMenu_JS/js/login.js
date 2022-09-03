function loguearse() {

    let firtname = document.getElementById('nombre').value;
    let lastname = document.getElementById('apellido').value;

    let usuario = firtname + " " + lastname;

    if (isNaN (firtname && lastname)) {

        alert('Bienvenido ' + usuario);
        console.log("usuario: " + usuario);
    } else {
        alert('Por favor vuelva a intentarlo');
    }

}





