// Obtiene la ventana modal
var modal = document.getElementById("myModal");

// Obtiene el botón que abre la ventana modal
var btn = document.getElementById("myBtn");

// Obtiene el elemento <span> que cierra la ventana modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abre la ventana modal 
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra la ventana modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier lugar fuera de la ventana modal, cierra la ventana
window.onclick = function(event) {
    if (event.target.className == "modal") {
        event.target.style.display = "none";
    }
}

window.onload = function() {
    var modal = document.getElementById('tuIdModal'); 
    var span = document.getElementsByClassName('tuClaseSpan')[0]; 
  
    if (modal && span) {
      span.onclick = function() {
        modal.style.display = "none";
      }
    } else {
      console.log('Modal o Span no se encontraron');
    }
  }
// Cuando el usuario hace clic en <span> (x), cierra la ventana modal
span.onclick = function() {
  modal.style.display = "none";
}