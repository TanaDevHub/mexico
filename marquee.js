const marqueeTrack = document.getElementById("marqueeTrack");
let marqueeWidth = marqueeTrack.scrollWidth; // Calcula el ancho total del texto
let position = 0;

function animateMarquee() {
    position -= 1; // Mueve el texto hacia la izquierda
    if (Math.abs(position) >= marqueeWidth) {
        position = 0; // Reinicia la posición para hacer el bucle continuo
    }
    marqueeTrack.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateMarquee); // Llama continuamente para asegurar suavidad
}

// Duplica el contenido para evitar espacios vacíos
marqueeTrack.innerHTML += marqueeTrack.innerHTML;

// Inicia la animación
animateMarquee();