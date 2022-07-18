const titreAssaisonnement = document.querySelector('.assaisonnement h3');
const titreInstructions = document.querySelector('.instructions h3');

titreAssaisonnement.addEventListener('click', () => {

    titreAssaisonnement.classList.toggle('active');

})

titreInstructions.addEventListener('click', () => {

    titreInstructions.classList.toggle('active');

})