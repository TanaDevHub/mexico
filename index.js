const slider = document.querySelector('.slider'); // Contenedor del slider
const slides = document.querySelectorAll('.slide'); // Todas las slides
const totalSlides = slides.length; // Número total de slides
let currentIndex = 0; // Índice actual

const transitionDuration = 1500; // Duración de la transición (en ms)
const intervalDuration = 3000; // Tiempo de espera en cada slide (en ms)

// Calcula el tiempo total considerando la transición
const totalInterval = transitionDuration + intervalDuration;

function showNextSlide() {
    // Incrementa el índice, volviendo al inicio si es el último slide
    currentIndex = (currentIndex + 1) % totalSlides;

    // Cambia la posición del slider
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambia las slides automáticamente, ajustando el intervalo total
setInterval(showNextSlide, totalInterval);


document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdown = dropdownToggle.parentElement;

    dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault(); // Evitar que se desplace la página
        dropdown.classList.toggle('open');
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});
