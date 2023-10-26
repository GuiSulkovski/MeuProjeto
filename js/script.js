// tres constantes para referenciar as "ITEM"  divs do projeto
const album = document.getElementById('albumFotos');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('buffet');
const mecatronica = document.getElementById('mecatronica')

// buscando as class dentro do iframe
const movieAlbum = document.querySelector('.movieAlbum');
const movieCasamentos = document.querySelector('.movieCasamentos');
const movieBuffet = document.querySelector('.movieBuffet');
const movieMecatronica = document.querySelector('.movieMecatronica');


// evento de click
album.addEventListener('click', () => {
    album.classList.toggle('active');
    movieAlbum.classList.toggle('active');
});

// evento de click
casamentos.addEventListener('click', () => {
    casamentos.classList.toggle('active');
    movieCasamentos.classList.toggle('active');
});

// evento de click
buffet.addEventListener('click', () => {
    buffet.classList.toggle('active');
    movieBuffet.classList.toggle('active');
});

mecatronica.addEventListener('click', () => {
    mecatronica.classList.toggle('active');
    movieMecatronica.classList.toggle('active');
});

