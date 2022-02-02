const titreMarinade = document.querySelector('.marinade h3');
const titreInstructions = document.querySelector('.instructions h3');

titreMarinade.addEventListener('click', () => {

    titreMarinade.classList.toggle('active');

})

titreInstructions.addEventListener('click', () => {

    titreInstructions.classList.toggle('active');

})