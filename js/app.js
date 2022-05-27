//Variables
const formulario = document.querySelector('#formulario'); //selector  id formulario (<form></form>)
const listaTweets = document.querySelector('#lista-tweets'); // selector del (<div></div>) donde se muestran los mensajes
let tweets = [];

//Event Listener
eventListener();

//Esta función escucha el evento submit del selector formulario y ejecuta la función agregarTweets
function eventListener() {
    formulario.addEventListener('submit', agregarTweets);
}



//Funciones
function agregarTweets(e) {
    e.preventDefault();


}


