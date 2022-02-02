const inputSearch = document.getElementById('search-input');

inputSearch.addEventListener('keyup', () => {
    let searchedLetters = inputSearch.value;
    const blockRecettes = document.querySelectorAll('.block-recette');
    correspondance(searchedLetters, blockRecettes);
})

function correspondance(letters, elements) {
    for(let i = 0; i < elements.length; i++) {
        if(elements[i].textContent.toLowerCase().includes(letters)) {
            elements[i].style.display = "block"
        } else {
            elements[i].style.display = "none"
        }
    }
}

  

