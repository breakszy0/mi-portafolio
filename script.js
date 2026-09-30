// Seleccionamos todas las tarjetas de proyectos
const tarjetas = document.querySelectorAll('.project-card');

// Creamos un observador para detectar cuando las tarjetas entran en pantalla
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            // Le agregamos la clase 'visible' cuando aparece en pantalla
            entrada.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Se activa cuando el 10% de la tarjeta es visible
});

// Le decimos al observador que vigile cada tarjeta
tarjetas.forEach(tarjeta => {
    observador.observe(tarjeta);
});