//window.onload = iniciar();

const jugadores = [];

//function iniciar() {
    //var btnClick = document.getElementById("btnSubmit");
    //btnClick.addEventListener("click", agregarJugador);

//}
  


function agregarJugador() {
    var txtJugador = document.getElementById("txtJugador");
    
    var jugador = txtJugador.value;
    jugadores.push(jugador);
    alert(jugadores);
    mostrarJugadores();
}

//var txtJugador =document.getElementById("txtJugador");
// if(keyup.keyCode != 13) {
//     keyup.preventDefault();
    
// }


function mostrarJugadores() {
    var itemDeLista = "";

    var listado = document.getElementById("listado");
    for (var jugador of jugadores) {
        itemDeLista += "<li>" + jugador + "; </li>";
    }
    listado.innerHTML= itemDeLista;

}
