const inputSearch = document.getElementById('search-input');
const blockRecettes = document.querySelectorAll('.block-recette');

inputSearch.addEventListener('keyup', () => {
    let searchedLetters = inputSearch.value;
    //console.log(searchedLetters);
    correspondance(searchedLetters, blockRecettes);
})

function correspondance(letters, elements) {
    for(let i = 0; i < elements.length; i++) {  
        console.log(elements[i].textContent);
        if(elements[i].textContent.toLowerCase().includes(letters)) {
            elements[i].style.display = "block"
        } else {
            elements[i].style.display = "none"
        }
    }
}

  

