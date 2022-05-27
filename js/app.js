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

    // Textarea donde el usuario escribe los tweets
    const tweet = document.querySelector('#tweet').value;

    //Validación....
    if (tweet === '') {
        mostrarError('Un mensaje NO puede enviarse vacío'); //llamamos a la función con su parámetro 
        return; //este return evita que se ejecuten mas lineas
    }
    //crear el objeto de tweets
    const tweetObj = {
        /* Al no tener una base de datos en el proyecto (Date.now()) simula el id 
        Date.now lo que hace es devolver en milisegundos el tiempo transcurrido desde 01/01/1970 
        esto hace que cada texto que escribimos en el textarea y apretemos enviar 
        nos agregue en el id: ese numero en milisegundos */
        id: Date.now(), 
        tweet // esto es igual a tweet: tweet
    }
    
    //Añadir al arreglo de tweets el array actual mas los tweets que se van cargando 
    tweets = [...tweets, tweetObj];

    // Una vez agregado crear el HTML
    crearHTML();

    //reseteo de formulario
    formulario.reset();


}

function mostrarError (error) {
    const mensajeError = document.createElement('p'); //crea el párrafo (<p></p>)
    mensajeError.textContent = error; //Agregael mensaje que le pasamos como parámetro al momento de llamar la función
    mensajeError.classList.add('error'); //añade la clase .error (está en custom.css)

    //insertarlo en el HTML
    const insertarContenido = document.querySelector('#contenido');
    insertarContenido.appendChild(mensajeError);

    //quitar mensaje después de 2 segundos 
    setTimeout(() => {
        mensajeError.remove();
    }, 2000);
}

// Muestra los tweets en el HTML
function crearHTML() {
    // Primero limpiamos el HTML
    limpiarHTML();

    if (tweets.length > 0) { //si el arreglo tiene algo
        tweets.forEach( tweet => {
            // crear el elemento li del HTML
            const li = document.createElement('li');

            //añado el texto
            li.textContent = tweet.tweet; //? por cada tweet del array accedemos a la propiedad del objeto (tweetObj) 

            // insertarlo en el HTML
            listaTweets.appendChild(li);
        });
    }
}

//limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}