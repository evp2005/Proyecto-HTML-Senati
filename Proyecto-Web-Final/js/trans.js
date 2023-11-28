//Animacion de cambio de color al iniciar la pagina
function cambiaColor() {
    document.body.classList.add('loaded');
}
 // Espera a que el documento se cargue completamente
 document.addEventListener("DOMContentLoaded", function() {
    // Obtén el elemento <body>
    var body = document.body;

    // Agrega la clase 'loaded' al elemento <body> para activar la animación
    body.classList.add('loaded');
});

