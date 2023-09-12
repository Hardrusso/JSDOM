// querySelector
const heading = document.querySelector('.header__texto h2')// toma 0 o 1 elemento
heading.textContent = 'JONATHAN THE BEST DB PROGRAMMER';
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); // toma todos los elementos disponibles
enlaces[0].textContent = 'Jonathan';
enlaces[0].classList.add('nueva-clase');


//getElementById
const heading2 = document.getElementById('heading');
console.log(heading2)

// Generar codigo html en JS

// Generar un nuevo Enlace
const nuevoEnlace = document.createElement('A')

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar texto
nuevoEnlace.textContent = 'New Enlace';

// Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregar nuevo enlace creado al documento

const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

// Eventos

// console.log(1);

// window.onload = function(){
//     console.log(3);
// };

// window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del HTML esten listos
//     console.log(2);
// });

// document.addEventListener('DOMContentLoaded', function(){ // Solo espera que se descargue el HTML
//     console.log(4);
// });

// console.log(5);

// window.onscroll =  function() {
//     console.log('scrolling...')
// };

// seleccionar elementos y asociarlos a eventos

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(e) { // "e" es igual a evento
    console.log(e);
    e.preventDefault();

    // validar un formulario preventDafault
    console.log('enviando Formulario');
});

// Eventos de los inputs y textArea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#mail');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    
    datos[e.target.id] = e.target.value;

    console.log(datos);
}