// tres constantes para referenciar as "ITEM"  divs do projeto
const dobradeira = document.getElementById('dobradeira');
const ihm = document.getElementById('ihm');
const calculadora = document.getElementById('calculadora');
const mecatronica = document.getElementById('mecatronica')

// buscando as class dentro do iframe
const movieDobradeira = document.querySelector('.movieDobradeira');
const movieIHM = document.querySelector('.movieIHM');
const movieCalculadora = document.querySelector('.movieCalculadora');
const movieMecatronica = document.querySelector('.movieMecatronica');


// evento de click
dobradeira.addEventListener('click', () => {
    dobradeira.classList.toggle('active');
    movieDobradeira.classList.toggle('active');
});

// evento de click
ihm.addEventListener('click', () => {
    ihm.classList.toggle('active');
    movieIHM.classList.toggle('active');
});

// evento de click
calculadora.addEventListener('click', () => {
    calculadora.classList.toggle('active');
    movieCalculadora.classList.toggle('active');
});

mecatronica.addEventListener('click', () => {
    mecatronica.classList.toggle('active');
    movieMecatronica.classList.toggle('active');
});

